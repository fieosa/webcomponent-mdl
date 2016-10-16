'use strict';

// Include Gulp & Tools We'll Use
import fs from 'fs';
import path from 'path';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import closureCompiler from 'gulp-closure-compiler';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

const banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * @copyright 2016 <%=author%>.',
  ' * @link <%=homepage%>',
  ' */',
  ''].join('\n');

const SOURCES = [
  'src/**/*.js',
];

// Build with Google's Closure Compiler, requires Java 1.7+ installed.
gulp.task('closure', () => {
  return gulp.src(SOURCES)
    .pipe(closureCompiler({
      compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
      fileName: 'webcomponent-mdl.closure.min.js',
      compilerFlags: {
        // jscs:disable closureCamelCase
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        language_in: 'ECMASCRIPT6_STRICT',
        language_out: 'ECMASCRIPT5_STRICT',
        warning_level: 'VERBOSE'
        // jscs:enable closureCamelCase
      }
    }))
    .pipe(gulp.dest('./dist'));
});

// Concatenate And Minify JavaScript
gulp.task('scripts', () => {
  return gulp.src(SOURCES)
    .pipe($.sourcemaps.init())
    // Concatenate Scripts
    .pipe($.concat('material.js'))
    .pipe($.iife({useStrict: true}))
    .pipe(gulp.dest('dist'))
    // Minify Scripts
    .pipe($.uglify({
      sourceRoot: '.',
      sourceMapIncludeSources: true
    }))
    .pipe($.header(banner, {pkg}))
    .pipe($.concat('material.min.js'))
    // Write Source Maps
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'scripts'}));
});

// Clean Output Directory
gulp.task('clean', () => del(['dist']));

// Build Production Files, the Default Task
gulp.task('default', ['clean'], cb => {
  runSequence(
    ['scripts'],
    cb);
});

/**
 * Defines the list of resources to watch for changes.
 */
function watch() {
  gulp.watch(['src/**/*.js', '!src/**/README.md'],
    ['scripts', reload]);
}

gulp.task('serve', () => {
  $.connect.server({
    root: 'test',
    port: 5000,
    livereload: true
  });

  watch();

  gulp.src('test/index.html')
    .pipe($.open({uri: 'http://localhost:5000'}));
});
