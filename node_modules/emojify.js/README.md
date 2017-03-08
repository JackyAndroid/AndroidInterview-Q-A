# emojify.js

[![npm version][ico-npm]][package-npm]
[![Bower version][ico-bower]][package-bower]
[![MIT Licensed][ico-license]][license]
[![Gitter chat][ico-gitter]][gitter]

---

Master | Develop
--- | ---
[![Master branch build status][ico-build]][travis] | [![Develop branch build status][ico-build-dev]][travis]
[![Master branch Windows build status][ico-windows-build]][appveyor] | [![Develop branch Windows build status][ico-windows-build-dev]][appveyor]

[![Browser Results](https://ci.testling.com/hassankhan/emojify.js.png)](https://ci.testling.com/hassankhan/emojify.js)

A swiss-army-knife for all emoji, in Javascript. Used by [Gitter](https://gitter.im/) and [Mapbox](https://www.mapbox.com/blog/emoji-map-markers/).

The emoji keywords are as described by [emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com).

Go to this project's [GitHub pages](http://hassankhan.github.com/emojify.js) to see the code in action.

## Features

- Fast
- Awesome
- Converts emoticons like `:) :( :'(`
- Allows customisation of processed emoji
- Multiple modes; `img`, sprites and data-URI
- Available on a CDN **(gasp)**
- Includes a [sample `.htaccess` file](.htaccess) for caching Javascript and CSS
- Switchable emoji sets **(SOON!)**
- Made from unicorn blood

## Installation

Care about old browsers compatibility? Use https://github.com/es-shims/es5-shim

### Via cdnjs

emojify.js is now available on cdnjs - https://cdnjs.com/libraries/emojify.js

Add this to the rest of your stylesheet imports:

`<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/emojify.js/1.0.1/emojify.min.css" />`

Then add this to your Javascript code:

`<script src="//cdnjs.cloudflare.com/ajax/libs/emojify.js/1.0.1/emojify.min.js"></script>`

### Via Bower

`bower install emojify.js --save`

### Via npm

`npm install emojify.js  --save`

## API

### setConfig([object])

*This works in the browser and on Node*

#### Parameters

- `object` - Optional JSON object with any of the following attributes:

Option | Default | Description
--- | --- | ---
`blacklist.elements` | `['script', 'textarea', 'a', 'pre', 'code']` | An array of elements you don't want emojified
`blacklist.classes` | `['no-emojify']` | An array of classes you don't want emojified
`mode` | `img` | By default, emojify will output an `img` with a `src` attribute for each emoji found. But if `mode` is set to `sprite` or `data-uri`, then `span`s with classes are outputted. Don't forget to include the appropriate CSS for your choice though, see the `/dist` directory.
`tag_type` | `null` | When set, emojify uses this element with the class `emoji emoji-#{emojiname}` instead of an `img` with a `src` attribute.  Example valid values: `div`, `span`. This takes precedence over the `mode` option. Note: if you're not using `img`s, `.emoji-+1` isn't a valid class, so `.emoji-plus1` is used instead.
`only_crawl_id` | `null` | **[DEPRECATED]** Restricts searching for emojis to a specified element & it's children. If null, and no object is passed to `run()`, `document.body` is used
`img_dir` | `'images/emoji'` | Defines the path to the emoji images
`ignore_emoticons` | `false` | If `true`, only convert emoji like `:smile:` and ignore emoticons like `:)`

#### Usage
```js
emojify.setConfig({tag_type : 'div'});
```

---

### run([element], [replacer])

*This works in the browser and Node*

#### Parameters
- `element` - Optional HTML element to restrict the emojification to.
- `replacer` - Optional Function to override emoji replacement behaviour with your own. The function will receive two arguments, the emoji pattern found (`emoji`), and the emoji name (`name`). In the case of emoticons, for example, `emoji = ':)'` and `name = 'smile'`. Your function must return a HTMLElement.


##### Browser
```js
emojify.run();
// OR
emojify.run(document.getElementById('my-element'))
// OR
emojify.run(null, function(emoji, emojiName){
  var span = document.createElement('span');
  span.className = 'emoji emoji-'  + emojiName;
  span.innerHTML = emoji + ' replaced';
  return span;
});
```

##### Node.js
Requires you to have jsdom installed:
`npm i jsdom --save`

```js
var jsdom = require('jsdom')

jsdom.env({
    html: "<p><code>jhhh</code><em>:)</em></p>",
    done: function(errors, window) {
        emojify.run(window.document.body)
    }
});
```
---

### replace(string, [callback])

*This works in the browser and on Node*

#### Parameters
- `string` - String to emojify
- `callback` - Optional callback function to output emoji with

#### Usage

By default, emojify.js uses the internal function `defaultReplacer()` to replace emoji. You can override this behaviour by supplying your own callback function.

Your callback function will receive two arguments, the emoji pattern found (`emoji`), and the emoji name (`name`). In the case of emoticons, for example, `emoji = ':)'` and `name = 'smile'`.

The context in which your replacer function is run will have the config available. So you can access properties such as `img_dir` at `this.config.img_dir`.

```js
emojify.replace('I am happy :)');
// OR
replacer = function(emoji, name) {
    // Customise output here
    return emojifiedString;
}

emojify.replace('I am happy :)', replacer);
```

## Contributing changes

Please read [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits

- [All Contributors](https://github.com/hassankhan/emojify.js/contributors)
- [Hassan Khan](https://github.com/hassankhan)

## License

Please read [LICENSE.md](LICENSE.md). For image attributions, please read [LICENSE-IMAGES.md](LICENSE-IMAGES.md)

[travis]: https://travis-ci.org/hassankhan/emojify.js
[appveyor]: https://ci.appveyor.com/project/hassankhan/emojify-js
[package-bower]: http://bower.io/search/?q=emojify.js
[package-npm]: https://www.npmjs.org/package/emojify.js
[ico-build]: http://img.shields.io/travis/hassankhan/emojify.js.svg?style=flat-square
[ico-build-dev]: http://img.shields.io/travis/hassankhan/emojify.js/develop.svg?style=flat-square
[ico-windows-build]: https://ci.appveyor.com/api/projects/status/908bymld8nm3ykxm?svg=true
[ico-windows-build-dev]: https://ci.appveyor.com/api/projects/status/908bymld8nm3ykxm/branch/develop?svg=true
[ico-bower]: http://img.shields.io/bower/v/emojify.js.svg?style=flat-square
[ico-npm]: http://img.shields.io/npm/v/emojify.js.svg?style=flat-square
[ico-license]: http://img.shields.io/npm/l/emojify.js.svg?style=flat-square
[ico-gitter]: https://badges.gitter.im/hassankhan/emojify.js.svg
[license]: http://hassankhan.mit-license.org/
[gitter]: https://gitter.im/hassankhan/emojify.js
