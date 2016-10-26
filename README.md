# [WebComponent-MDL][webcomponent-mdl-url]
[![Maintenance Status][status-image]][status-url]

WebComponent-MDL is a set of custom components build on top of [Material Design Lite][google-mdl-url]<sup>v1.2.1</sup>

## Browser Support

| IE9 | IE10 | IE11 | Chrome | Opera | Firefox | Safari | Chrome (Android) | Mobile Safari |
|-----|------|------|--------|-------|---------|--------|------------------|---------------|
| B   | A    | A    | A      | A     | A       | A      | A                | A             |

## Requirements
This project is using [Material Design Lite][google-mdl-url] CSS library, add these lines to your html page.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.deep_purple-amber.min.css">
<script src="https://code.getmdl.io/1.2.1/material.min.js"></script>
<script src="path/to/your/webcomponent-mdl.min.js"></script>
```

### Usage

`npm install webcomponent-mdl` will put [dist/webcomponent-mdl.min.js](dist/webcomponent-mdl.min.js) inside `node_modules/webcomponent-mdl/` of your project.

If you're working with a tool like Browserify, Webpack, RequireJS, etc, you can
import the script.

```js
import 'webcomponent-mdl' // ES2015
// or
require('webcomponent-mdl') // CommonJS
// or
define(['webcomponent-mdl'], function() {}) // AMD
```

If you're not using a module system, just place
`node_modules/webcomponent-mdl/dist/webcomponent-mdl.min.js`
somewhere where it will be served by your server, then put

```html
<script src="/path/to/webcomponent-mdl.min.js"></script>
```

in your head element and you should be good to go.


## Develop

* Clone this repository.
* Run `npm install` and `npm start` to run the demo page on `localhost:3000`.

For a listing of available components, as well as specific usage information, check out the [Components][webcomponent-mdl-components-url] page on the website.

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.

[webcomponent-mdl-url]: https://fieosa.github.io/webcomponent-mdl/
[google-mdl-url]: https://github.com/google/material-design-lite

[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/FIEOSA/webcomponent-mdl

[webcomponent-mdl-components-url]: https://fieosa.github.io/webcomponent-mdl/components/index.html
[webpack-url]: https://webpack.github.io/
[browserify-url]: http://browserify.org/
