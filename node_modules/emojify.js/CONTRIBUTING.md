Contributing
===

This project follows [Git-Flow](http://nvie.com/posts/a-successful-git-branching-model/), and as such has ``master`` and ``develop`` branches.

## Prerequisites

1. Install the appropriate [EditorConfig](http://editorconfig.org) plugin for your IDE/editor. This helps keep the code style consistent.
2. Install [PhantomJS](http://phantomjs.org). Make sure it's on your path / available when calling `phantomjs` from the command line.
2. `npm install -g gulp`
3. `npm install`

## Running the tests

- All tests: `npm test`
- Just the browser ones: `phantomjs tests/phantom.js`
- Just the Node ones: `node tests/node.js`

## Before creating a pull request

Make sure you do the following:

- Run `gulp`

Note: The build script will generate new `*.min.{css,js}` files. If, for example, you only changed the JavaScript then don't bother committing `emojify.min.css`.

## Releasing & Publishing

Before a release, generate a commit log:

```
git log --pretty=format:"- %s" >> log.md
```

If you have rights to publish to npm, do the following first:

- Run `gulp update`. This will update the project with the latest emoji from [emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com).
- Run `gulp`
- Run `gulp bump`
- Run `npm publish`
