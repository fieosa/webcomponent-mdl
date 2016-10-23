'use strict';

const fs = require('fs');
const path = require('path');
const del = require('del');
const runSequence = require('run-sequence');
const through = require('through2');
const swig = require('swig');
const gulp = require('gulp');
const ghPagesDeploy = require('gulp-gh-pages');
const marked = require('marked');
const highlightjs = require('highlight.js');
const webpack = require('gulp-webpack');
const gulpLoadPlugins = require('gulp-load-plugins');
const pkg = require('./package.json');
const webpackConfig = require('./webpack.config.js');
const connect = require('gulp-connect');
const $ = gulpLoadPlugins();
const hostedLibsUrlPrefix = 'https://localhost';

const AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts',/* ['lint'],*/ () => {
  return gulp.src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

// Optimize Images
gulp.task('images', () => {
  return gulp.src('src/**/*.{svg,png,jpg}')
    .pipe($.flatten())
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

/**
 * Generates an HTML file based on a template and file metadata.
 */
swig.setDefaults({ cache: false });
function applyTemplate() {
  return through.obj((file, enc, cb) => {
    const data = {
      site: {},
      page: file.page,
      content: file.contents.toString()
    };

    const templateFile = path.join(
        __dirname, 'docs', '_templates', `${file.page.layout}.html`);
    const tpl = swig.compileFile(templateFile);

    file.contents = new Buffer(tpl(data));
    cb(null, file);
  });
}

function getMarkedConfig(taskName) {
  let renderer = new marked.Renderer();
  renderer.code = function(code, lang) {
    let demo = '';
    if (lang === 'html_demo') {
      lang = 'html';
      demo = `<div class="html_demo">${code}</div>`;
    }
    lang = typeof lang === 'string' && highlightjs.getLanguage(lang) ? lang : false;
    code = lang ? highlightjs.highlight(lang, code).value : highlightjs.highlightAuto(code).value;
    return `${demo}<pre><code class="hljs ${lang||''}">${code}</code></pre>`;
  };
  return { renderer };
}

/**
 * Generates an index.html file for each README in MDL/src directory.
 */
gulp.task('components', () => {
  return gulp.src('src/**/README.md', {base: 'src'})
    // Add basic front matter.
    .pipe($.header('---\nlayout: component\ninclude_prefix: ../../\n---\n\n'))
    .pipe($.frontMatter({
      property: 'page',
      remove: true
    }))
    .pipe($.marked(getMarkedConfig('components')))
    .pipe((() => {
      return through.obj((file, enc, cb) => {
        file.page.component = file.relative.split('/')[0];
        cb(null, file);
      });
    })())
    .pipe(applyTemplate())
    .pipe($.rename(path => path.basename = 'index'))
    .pipe(gulp.dest('dist/components'));
});

/**
 * Generates an HTML file for each md file in _pages directory.
 */
gulp.task('pages', ['components'], () => {
  return gulp.src('docs/_pages/*.md')
    .pipe($.frontMatter({
      property: 'page',
      remove: true
    }))
    .pipe($.marked(getMarkedConfig('pages')))
    .pipe(applyTemplate())
    .pipe($.replace('$$version$$', pkg.version))
    .pipe($.replace('$$hosted_libs_prefix$$', hostedLibsUrlPrefix))
    .pipe($.rename(path => {
      if (path.basename !== 'index') {
        path.dirname = path.basename;
        path.basename = 'index';
      }
    }))
    .pipe(gulp.dest('dist'));
});

/**
 * Copies assets from MDL and _assets directory.
 */
gulp.task('assets', () => {
  return gulp.src([
      'docs/_assets/**/*',
      'node_modules/highlight.js/lib/highlight.js',
      'node_modules/highlight.js/styles/github-gist.css',
    ])
    .pipe($.if(/\.js/i, $.replace('$$version$$', pkg.version)))
    .pipe($.if(/\.js/i, $.replace('$$hosted_libs_prefix$$', hostedLibsUrlPrefix)))
    .pipe($.if(/\.(svg|jpg|png)$/i, $.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe($.if(/\.css/i, $.autoprefixer(AUTOPREFIXER_BROWSERS)))
    .pipe($.if(/\.css/i, $.csso()))
    .pipe($.if(/\.js/i, $.uglify({
      preserveComments: 'some',
      sourceRoot: '.',
      sourceMapIncludeSources: true
    })))
    .pipe(gulp.dest('dist/assets'));
});

/**
 * Defines the list of resources to watch for changes.
 */
function watch() {
  gulp.watch(['src/**/*.js'], ['scripts']);
  gulp.watch(['src/**/*.{svg,png,jpg}'], ['images']);
  gulp.watch(['src/**/README.md'], ['pages']);
  gulp.watch(['docs/**/*'], ['pages', 'assets']);
}

// Clean Output Directory
gulp.task('clean', () => del(['dist', '.publish']));

// Build Production Files, the Default Task
gulp.task('default', ['clean'], cb => {
  runSequence(
    ['scripts'],
    cb);
});

// Build production files and microsite
gulp.task('build', ['clean'], cb => {
  runSequence(
    ['scripts'],
    ['assets', 'pages', 'images'],
    cb);
});

/**
 * Serves the landing page from "out" directory.
 */
gulp.task('serve', () => {
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true
  });
  watch();
});

/**
 * publish the docs from "dist" directory to gh-pages branch.
 */
gulp.task('publish:docs', ['build'], () => {
  return gulp.src("dist/**/*")
    .pipe(ghPagesDeploy())
});
