# plugin-fontsettings

This plugin adds font settings button in the GitBook website.

### Disable this plugin

This is a default plugin and it can be disabled using a `book.json` configuration:

```
{
    plugins: ["-fontsettings"]
}
```

### Configuration

This plugin can be configured in the `book.json`:

Default configuration is:

```js
{
    "pluginsConfig": {
        "fontsettings": {
            "theme": 'white', // 'sepia', 'night' or 'white',
            "family": 'sans', // 'serif' or 'sans',
            "size": 2         // 1 - 4
        }
    }
}
```

### Plugin API

This plugin exposes the following API to easily allow new themes to manage the plugin behavior.

All API functions are called using the prefix `gitbook.fontsettings.`, for instance `gitbook.fontsettings.enlargeFontSize()`.

#### Font manipulation

##### `gitbook.fontsettings.enlargeFontSize()`

Increases the font size of the document by one. Max value is `4`.

##### `gitbook.fontsettings.reduceFontSize()`

Decreases the font size of the document by one. Min value is `1`.

#### Font families

Each font family should be described as:

```js
var fontFamily = {
    config: 'sans',  // name of the font family in book.json for your theme
    text: 'Sans',    // display name of the font family in menu
    id: 0            // the id appended to the CSS class for this font-family
};
```

The `text` property will be used to display the font-family name in the fontsettings dropdown menu.

The `config` property allows you to let the users of your theme choose a default font family in their `book.json`. You will have to handle setting the chosen font family in your theme's frontend JavaScript.

For instance:

```json
// book.json
{
    plugins: ["my-theme"],
    pluginsConfig: {
        "my-theme": {
            "font-family": "sans"
        }
    }
}
```

```js
// my-theme.js
require('gitbook', function(gitbook) {
    var FONT_FAMILIES = [
        {
            config: 'sans',
            text: 'Sans',
            id: 0
        },
        {
            config: 'serif',
            text: 'Serif',
            id: 1
        }
    ];

    gitbook.events.on('start', function(e, config) {
        // Read configuration
        var themeConfig = config['my-theme'],
            defaultFont = themeConfig['font-family'];

        // Initialize new font families
        gitbook.fontsettings.setFamilies(FONT_FAMILIES);
        // Set to configured font-family
        gitbook.fontsettings.setFamily(defaultFont);
    });
});
```

The `id` property lets you define a specific id to use for your CSS rules as explained below.

##### CSS rules

The CSS class `font-family-<id>` will be applied to the theme book's root element `<div class="book">` when a font family is selected in the menu.

The CSS rules for the font-family can then easily be defined using the parent selector `.book.font-family-<id>`:

```CSS
.book.font-family-<id> {
  font-family: 'My Awesome Font';
}
```

##### Managing the font families

##### `gitbook.fontsettings.getFamilies()`

Returns the currently set font families.

By default, the font families are:

```js
// Default font families
var FAMILIES = [
    {
        config: 'serif',
        text: 'Serif',
        id: 0
    },
    {
        config: 'sans',
        text: 'Sans',
        id: 1
    }
];
```

##### `gitbook.fontsettings.setFamilies()`

Set the new font families configuration, as an array of font family objects, used by the `plugin-fontsettings` in the form:

```js
var FONT_FAMILIES = [
    {
        config: 'sans',
        text: 'Sans',
        id: 0
    },
    {
        config: 'serif',
        text: 'Serif',
        id: 1
    }
];

gitbook.fontsettings.setFamilies(FONT_FAMILIES);
```

This will recreate the fontsettings menu to reflect the changes.

##### `gitbook.fontsettings.setFamily()`

Takes a font-family `config` key as an argument and updates the font-family used for this book.

This will basically apply the CSS class with the corresponding family `id`: `.font-family-<id>`.

#### Color themes

Setting and manipulating color themes follow the exact same rules as font families.

Here are the default value for the color themes in the plugin:

```js
// Default themes
var THEMES = [
    {
        config: 'white',
        text: 'White',
        id: 0
    },
    {
        config: 'sepia',
        text: 'Sepia',
        id: 1
    },
    {
        config: 'night',
        text: 'Night',
        id: 2
    }
];
```

##### CSS rules

The applied CSS classes for color themes will be in the form: `.color-theme-<id>`.

**Caution**: No CSS class for color theme with `id: 0` will be applied. Basically, the first color theme corresponds to your default theme's colors.

For instance, using the default color themes:

```js
gitbook.fontsettings.setTheme('night');
```

will result in the following HTML state for the root element:

```HTML
<div class="book color-theme-2">
```

While:

```js
gitbook.fontsettings.setTheme('white');
```

will reset the HTML state for the root element:

```HTML
<div class="book">
```

##### Managing the color themes

##### `gitbook.fontsettings.getFamilies()`

Returns the currently set color themes.

By default, the font families are:

```js
// Default themes
var THEMES = [
    {
        config: 'white',
        text: 'White',
        id: 0
    },
    {
        config: 'sepia',
        text: 'Sepia',
        id: 1
    },
    {
        config: 'night',
        text: 'Night',
        id: 2
    }
];
```

##### `gitbook.fontsettings.setThemes()`

Set the new color themes configuration, as an array of font family objects, used by the `plugin-fontsettings` in the form:

```js
var COLOR_THEMES = [
    {
        config: 'light',
        text: 'Light',
        id: 0
    },
    {
        config: 'dark',
        text: 'Dark',
        id: 1
    }
];

gitbook.fontsettings.setThemes(COLOR_THEMES);
```

This will recreate the fontsettings menu to reflect the changes.

##### `gitbook.fontsettings.setTheme()`

Takes a color theme `config` key as an argument and updates the color theme used for this book.

This will basically apply the CSS class with the corresponding theme `id`: `.color-theme-<id>`, or remove the applied CSS class if the selected theme `id` is `0`.