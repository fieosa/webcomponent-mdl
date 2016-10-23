# [WebComponent-MDL][webcomponent-mdl-url]
[![Maintenance Status][status-image]][status-url]

WebComponent-MDL is a set of custom components build on top of [Material Design Lite][google-mdl-url]<sup>v1.2.1</sup>

## Requirements
This project is using [Material Design Lite][google-mdl-url] CSS library, add these lines to your html page.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.deep_purple-amber.min.css">
<script src="path/to/your/webcomponent-mdl.min.js"></script>
```


## Installation

* Clone this repository.
* Run `npm install` and `gulp build` to get the minified library file in `/dist/webcomponent-mdl.min.js`.

run `npm install` and `npm start` to run the demo page on `localhost:3000`.


## Usage

You can use React-MDL through a bundler like [webpack][webpack-url] or [browserify][browserify-url] by importing `react-mdl` in your application:

```js
import { Button, Card, CardText } from 'react-mdl';

// or...
import Button from 'react-mdl/lib/Button';
import { Card, CardText, CardActions } from 'react-mdl/lib/Card';
```

Alternatively, you can include `node_modules/react-mdl/out/ReactMDL.js` as a script, but you'll likely want to copy it to a folder outside of `node_modules` first, such as `lib` or `vendor`. Then a global `ReactMDL` will be available:

```js
const { Button, Card, CardText } = ReactMDL;
```

For a listing of available components, as well as specific usage information, check out the [Components][react-mdl-components-url] page on the website.

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.

[webcomponent-mdl-url]: https://fieosa.github.io/webcomponent-mdl/
[google-mdl-url]: https://github.com/google/material-design-lite

[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/FIEOSA/webcomponent-mdl

[react-mdl-components-url]: https://fieosa.github.io/webcomponent-mdl/components/index.html
[webpack-url]: https://webpack.github.io/
[browserify-url]: http://browserify.org/
