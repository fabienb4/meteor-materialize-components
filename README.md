# fabienb4:materialize-components

A collection of Materialize components (templates) to use with Meteor.

## Table of Contents

- [Installation](#installation)
- [Available variables](#available-variables)
- [Available components](#available-components)
- [License](#license)
- [Contributing](#contributing)

## Installation

In your Meteor app directory:

```
$ meteor add materialize:materialize fabienb4:materialize-components
```

## Available variables

- `Materialize.ICONS`
- `Materialize.BACKGROUND_COLORS`
- `Materialize.TEXT_COLORS`

- `Components._schemas`

## Available components

### Basic
- `badge`
  - `text` => `String`
  - `new` => `Boolean`, optional
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
- `button`
  - `text` => `String`, optional
  - `icon` => `Object`, optional
    - `name` => `String` in `Materialize.ICONS`
    - `aligment` => `String` in `["left", "right"]`, default: `"left"`
    - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
    - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `href` => `String`, optional
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `waves` => `Boolean`, optional
  - `floating` => `Boolean`, optional
  - `flat` => `Boolean`, optional
  - `modalTrigger` => `Boolean`, optional
  - `large` => `Boolean`, optional
  - `disabled` => `Boolean`, optional
  - `options` => `Object`, optional
    - `data-activates` => `String` (for dropdowns), optional
    - any HTML property usable on `<a>` tag, optional
- `chip`
  - `text` => `String`
  - `image` => `String`, optional
  - `tag` => `Boolean`, optional
- `dropdown`
  - `id` => `String`
  - `items` => `[Object]`
    - `link` => `String`, optional
    - `linkText` => `String`, optional
    - `badge` => `Object` (see `badge` component), optional
    - `divider` => `Boolean` (other properties are disregarded if true), optional
- `icon`
  - `name` => `String` in `Materialize.ICONS`
  - `size` => `String` in `["tiny", "small", "medium", "large"]`, optional
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `alignment` => `String` in `["left", "right"]`, default: `""`
  - `circle` => `Boolean`, optional
- `input`
  - `colSize` => `Number` from 1 to 12
  - `placeholder` => `String`, optional
  - `name` => `String`
  - `type` => `String`
  - `label` => `String`, optional
- `modal`
  - `id` => `String`
  - `type` => `String` in `["modal-fixed-footer", "bottom-sheet"]`, default: `""`
  - `title` => `String`
  - `content` => `String`
  - `actions` => `[Object]`, optional
    - `link` => `String`, optional
    - `linkText` => `String`
    - `flat` => `Boolean`, optional
    - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
    - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
- `navbar`
  - `fixed` => `Boolean`, optional
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `title` => `Object`
    - `link` => `String`
    - `side` => `String` in `["right", "center"]`, default: `""`
    - `text` => `String`
  - `links` => `[Object]`
    - `active` => `Boolean`, optional
    - `options` => `Object`, optional
      - any HTML property usable on `<a>` tag, optional
    - `icon` => `Object`, optional
      - `name` => `String`
      - `alignment` => `String` in `["left", "right"]`, default: `"left"`
    - `linkText` => `String`
- `preloader`
  - `size` => `String` in `["big", "small"]`, default: `""`
  - `active` => `Boolean`, default: `true`
  - `flashing` => `Boolean`, optional
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
  - `cardPanel` => `Boolean`, optional
  - `reveal` => `Boolean`, optional
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `size` => `String` in `Components.Cards.SIZES`, optional
  - `title` => `String`, optional
  - `content` => `String`
  - `image` => `String`, optional
  - `actions` => `Object`, optional
    - `link` => `String`
    - `linkText` => `String`


-  `collapsible`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `popout` => `Boolean`, optional
  - `type` => `String` in `Components.Collapsibles.TYPES`
  - `items` => `[Object]`
    - `active` => `Boolean`, optional
    - `icon` => `Object`, optional
      - `name` => `String` in `Materialize.ICONS`
      - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
      - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
    - `title` => `String`
    - `content` => `String`


- `collection`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
  - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
  - `links` => `[Object]`, optional: true
    - `link` => `String`
    - `linkText` => `String`
  - `header => `String`, optional
  - `items => `[Object]`, optional
    - `dismissable` => `Boolean`, optional
    - `avatar` => `Object`, optional
      - `image` => `String`, optional
      - `icon` => `Object`, optional
        - `name` => `String` in `Materialize.ICONS`
        - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
        - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional
    - `title` => `String`, optional
    - `content` => `String`
    - `secondaryContent` => `Object`, optional
      - `link` => `String`
      - `icon` => `Object`
        - `name` => `String` in `Materialize.ICONS`
        - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`, optional
        - `textColor` => `String` in `Materialize.TEXT_COLORS`, optional


- `parallax`
  - `image` => `String`
  - `height` => `Number`, optional


- `slider`
  - `fullscreen` => `Boolean`, default: `false`, optional
  - `slides` => `[Object]`
    - `image` => `String`, optional
    - `caption` => `Object`, optional
      - `alignment` => `String` in `Components.Sliders.ALIGNMENTS`
      - `titleColor` => `String` in `Materialize.TEXT_COLORS`, optional
      - `title` => `String`, optional
      - `contentColor` => `String` in `Materialize.TEXT_COLORS`, optional
      - `content` => `String`, optional


#### How to use one of the advanced component
  Basic usage
  ```js
    Template.main.helpers({
      card: function() {
        return Components.Cards.findOne(this._id);
      }
    });
  ```

  ```js
    <template name="main">
      {{> card card}}
    </template
  ```

  Advanced usage (use your imagination!)
  ```js
    // schema for the dynamic components collection
    let schema = new SimpleSchema({
      // exclude undesired values from keys
      type: { type: String, allowedValues: _.takeWhile(_.keys(Components), key => { return ! _.startsWith(key, "_"); }) },
      _id:  { type: SimpleSchema.RegEx.Id }
    });

    DynamicComponents = new Mongo.Collection("dynamic-components");

    DynamicComponents.attachSchema(schema);

    Template.main.helpers({
      dynamicComponents: function() {
        return DynamicComponents.find();
      },
      componentTemplate: function() {
        // dynamically retrieve the template to use based on the type of component
        return Components[this.type].TEMPLATE;
      },
      componentData: function() {
        // dynamically retrieve the component to show
        return Components[this.type].findOne(this._id);
      }
    });
  ```

  ```js
    <template name="main">
      {{#each dynamicComponents}}
        {{> Template.dynamic template=componentTemplate data=componentData}}
      {{/each}}
    </template>
  ```

### Custom
- `loadingScreen`
  - `backgroundColor` => `String` in `Materialize.BACKGROUND_COLORS`
  - `preloader` => `Object`
    - `size` => `String` in `["big", "small"]`, default: `""`
    - `flashing` => `Boolean`
    - `color` => `String` in `["blue", "red", "yellow", "green"]`, default: `"blue"`

## License

MIT

## Contributing

Anyone is welcome to contribute. Fork, make your changes (test them!), and then submit a pull request.

Bitcoin: `34o6GtZPvVXparT46Zw2kfdxex2SWRpkGS`

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg)](https://gratipay.com/fabienb4/)
