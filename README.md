# fabienb4:materialize-components

A collection of Materialize components (templates) to use with Meteor.

> `materialize:materialize` is included in the package.

## Table of Contents

- [Installation](#installation)
- [Available components](#available-components)
- [License](#license)
- [Contributing](#contributing)

## Installation

In your Meteor app directory:

```
$ meteor add fabienb4:materialize-components
```

## Available components

### Basic
- `badge`
  - `text` => `String`
  - `new` => `Bbolean`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`
  - `textColor` => `String` in `Materialize.TEXT_COLORS`
- `button`
  - `text` => `String`
  - `icon` => `Object`
    - `name` => `String`
    - `aligment` => `String` in `["left", "right"]`, default: `"left"`
    - `color` => `String` in `Materialize.TEXT_COLORS`
  - `href` => `String`
  - `color` => `String` in `Materialize.BACKGROUND_COLORS`
  - `textColor` => `String` in `Materialize.TEXT_COLORS`
  - `waves` => `Boolean`
  - `floating` => `Boolean`
  - `flat` => `Boolean`
  - `modalTrigger` => `Boolean`
  - `large` => `Boolean`
  - `disabled` => `Boolean`
  - `options` => `Object`
    - `data-activates` => `String` (for dropdowns)
    - any HTML property usable on `<a>` tag
- `dropdown`
  - `id` => `String`
  - `items` => `Object`
    - `link` => `String`
    - `linkText` => `String`
    - `badge` => `Object` (see `badge` component)
    - `divider` => `Boolean` (other properties are disregarded if true)
- `icon`
  - `name` => `String` in `Materialize.ICONS`
  - `size` => `String` in `["tiny", "small", "medium", "large"]`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`
  - `color` => `String` in `Materialize.TEXT_COLORS`
  - `alignment` => `String` in `["left", "right"]`, default: `""`
  - `circle` => `Boolean`
- `input`
  - `colSize` => `Number` from 1 to 12
  - `placeholder` => `String`
  - `name` => `String`
  - `type` => `String`
  - `label` => `String`
- `modal`
  - `id` => `String`
  - `type` => `String` in `["modal-fixed-footer", "bottom-sheet"]`, default: `""`
  - `title` => `String`
  - `content` => `String`
  - `actions` => `Object`
    - `link` => `String`
    - `linkText` => `String`
    - `flat` => `Boolean`
    - `color` => `String` in `Materialize.BACKGROUND_COLORS`
    - `textColor` => `String` in `Materialize.TEXT_COLORS`
- `navbar`
  - `fixed` => `Boolean`
  - `color` => `String` in `Materialize.BACKGROUND_COLORS`
  - `textColor` => `String` in `Materialize.TEXT_COLORS`
  - `title` => `Object`
    - `link` => `String`
    - `side` => `String` in `["right", "center"]`, default: `""`
    - `text` => `String`
  - `links` => `Object`
    - `active` => `Boolean`
    - `options` => `Object`
      - any HTML property usable on `<a>` tag
    - `icon` => `Object`
      - `name` => `String`
      - `alignment` => `String` in `["left", "right"]`, default: `"left"`
    - `linkText` => `String`
- `preloader`
  - `size` => `String` in `["big", "small"]`, default: `""`
  - `active` => `Boolean` default: `true`
  - `flashing` => `Boolean`
  - `color` => `String` in `["blue", "red", "yellow", "green"]`, default: `"blue"`
- `progress`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`
  - `color` => `String` in `Materialize.BACKGROUND_COLORS`
  - `type` => `String` in `["determinate", "indeterminate"]`, default: `"indeterminate"`
- `searchbar`
  - `name` => `String`
- `tabs`
  - `tabs` => `Object`
    - `id` => `String`
    - `title` => `String`
    - `content` => `String`

### Advanced (optimized to use a Mongo.Collection)
- `card`
  ```js
    Components.Cards = new Mongo.Collection("cards");

    Components.Cards.SIZES = [
      "small",
      "medium",
      "large"
    ];

    Components.Cards.TEMPLATE = "card";

    var cardActionSchema = new SimpleSchema({
      link:     { type: String },
      linkText: { type: String },
    });

    var cardSchema = new SimpleSchema({
      cardPanel:       { type: Boolean, optional: true },
      reveal:          { type: Boolean, optional: true },
      backgroundColor: { type: String, allowedValues: Materialize.BACKGROUND_COLORS, optional: true },
      textColor:       { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      size:            { type: String, allowedValues: Components.Cards.SIZES, optional: true },
      title:           { type: String, optional: true },
      content:         { type: String },
      image:           { type: String, optional: true },// FIXME: change to use cfs uploaded image
      actions:         { type: [cardActionSchema], optional: true }
    });
  ```
- `collapsible`
  ```js
    Components.Collapsibles = new Mongo.Collection("collapsibles");

    Components.Collapsibles.TYPES = [
      "accordion",
      "expandable"
    ];

    Components.Collapsibles.TEMPLATE = "collapsible";

    var collapsibleItemSchema = new SimpleSchema({
      active:    { type: Boolean, optional: true },
      iconColor: { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      icon:      { type: String, allowedValues: Materialize.ICONS, optional: true },
      title:     { type: String },
      content:   { type: String }
    });

    var collapsibleSchema = new SimpleSchema({
      backgroundColor: { type: String, allowedValues: Materialize.BACKGROUND_COLORS, optional: true },
      textColor:       { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      popout:          { type: Boolean, optional: true },
      type:            { type: String, allowedValues: Components.Collapsibles.TYPES },
      items:           { type: [collapsibleItemSchema] }
    });
  ```
- `collection`
  ```js
    Components.Collections = new Mongo.Collection("collections");

    Components.Collections.TEMPLATE = "collection";

    var collectionLinkSchema = new SimpleSchema({
      link:     { type: String },
      linkText: { type: String }
    });

    var collectionItemAvatarSchema = new SimpleSchema({
      image:               { type: String, optional: true },// FIXME: change to use cfs uploaded image
      iconbackgroundColor: { type: String, allowedValues: Materialize.BACKGROUND_COLORS, optional: true },
      iconColor:           { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      icon:                { type: String, allowedValues: Materialize.ICONS, optional: true },
    });

    var collectionItemSecondaryContentSchema = new SimpleSchema({
      link:      { type: String },
      iconColor: { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      icon:      { type: String, allowedValues: Materialize.ICONS},
    });

    var collectionItemSchema = new SimpleSchema({
      dismissable:      { type: Boolean, optional: true },
      avatar:           { type: collectionItemAvatarSchema, optional: true },
      title:            { type: String, optional: true },
      content:          { type: String },
      secondaryContent: { type: collectionItemSecondaryContentSchema, optional: true }
    });

    var collectionSchema = new SimpleSchema({
      backgroundColor: { type: String, allowedValues: Materialize.BACKGROUND_COLORS, optional: true },
      textColor:       { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      links:           { type: collectionLinkSchema, optional: true },
      header:          { type: String, optional: true },
      items:           { type: collectionItemSchema, optional: true }
    });
  ```
- `parallax`
  ```js
    Components.Parallaxes = new Mongo.Collection("parallaxes");

    Components.Parallaxes.TEMPLATE = "parallax";

    var parallaxSchema = new SimpleSchema({
      image:  { type: String },// FIXME: change to use cfs uploaded image
      height: { type: Number, optional: true }
    });
  ```
- `slider`
  ```js
    Components.Sliders = new Mongo.Collection("sliders");

    Components.Sliders.ALIGNMENTS = [
      "left",
      "center",
      "right"
    ];

    Components.Sliders.TEMPLATE = "slider";

    var sliderSlideCaptionSchema = new SimpleSchema({
      alignment:    { type: String, allowedValues: Components.Sliders.ALIGNMENTS },
      titleColor:   { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      title:        { type: String, optional: true },
      contentColor: { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
      content:      { type: String, optional: true }
    });

    var sliderSlideSchema = new SimpleSchema({
      image:   { type: String, optional: true },// FIXME: change to use cfs uploaded image
      caption: { type: sliderSlideCaptionSchema, optional: true }
    });

    var sliderSchema = new SimpleSchema({
      fullscreen: { type: Boolean, defaultValue: false, optional: true },
      slides:     { type: [sliderSlideSchema] }
    });
  ```

#### How to use one of the advanced component
  Basic usage
  ```js
    // in JS
    Template.main.helpers({
      card: function() {
        return Components.Cards.findOne(this._id);
      }
    });
    // in HTML
    <template name="main">
      {{> card card}}
    </template
  ```

  Advanced usage
  ```js
    // in JS
    Template.main.helpers({
      components: function() {
        // here you can use a Mongo.Collection document to display components dynamically
        return [
          { type: "Cards", _id: "0" },
          { type: "Parallaxes", _id: "0" }
        ];
      },
      componentTemplate: function() {
        return Components[this.type].TEMPLATE;
      },
      componentData: function() {
        return Components[this.type].findOne(this._id);
      }
    });
    // in HTML
    <template name="main">
      {{#each components}}
        {{> Template.dynamic template=componentTemplate data=componentData}}
      {{/each}}
    </template>
  ```

### Custom
- `loadingScreen`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`
  - `size` => `String` (see `preloader` > `size`)
  - `flashing` => `Boolean` (see `preloader` > `flashing`)
  - `color` => `String` (see `preloader` > `color`)

## License

MIT

## Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
