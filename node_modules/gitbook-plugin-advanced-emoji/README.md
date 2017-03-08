# GitBook Plugin: Advanced Emoji

Transforms emojis like `:white_check_mark:` into real <img src="https://codeclou.github.io/gitbook-plugin-advanced-emoji/doc/white_check_mark_20.png"/> emoji images using [emojify.js](https://github.com/hassankhan/emojify.js).

Please note that this plugin only works for **markdown** files. All other filetypes will just be ignored, and the plugin does nothing.

## Installation

You can install this plugin via npm:

```bash
$ npm install gitbook-plugin-advanced-emoji
```

Be sure to activate the option from the `book.json` file:

```json
{
    "plugins" : ["advanced-emoji"]
}
```

Then run `gitbook install` followed by either `gitbook serve` or `gitbook build`


## Using Ignore Flags

If you want for example occurences of emojis **not replaced** you will need to wrap them in the following comments.

```
<!-- ignore:advanced-emoji:start -->
:white_check_mark:
<!-- ignore:advanced-emoji:end -->
```

You can even set the ignores around a codeblock or more lines.

```
This is a text

<!-- ignore:advanced-emoji:start -->
'''
Check the Code
Code ... :white_check_mark:
'''
<!-- ignore:advanced-emoji:end -->

foo
```

## License

 * https://github.com/codeclou/gitbook-plugin-advanced-emoji is licensed under MIT License
 * https://github.com/hassankhan/emojify.js is licensed under MIT License

## Publishing to npmjs.com

```
npm install           # install dependencies
npm run pre-publish   # copies emoji pngs and css to assets folder
npm run publish       # publishes to npmjs.com
```
