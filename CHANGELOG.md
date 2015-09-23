fabienb4:materialize-components
=========================

A collection of Materialize components (templates) to use with Meteor.

## ChangeLog

### 0.2.0 [BREAKING]

- Updated for compatibility with Meteor 1.2 (_no longer usable with Meteor < 1.2_).
  - Make use of ES6.
- Major code cleanup.
- Improved various components.
- Variable names are now more consistent:
  - `icon` is now always an object (see README for properties)
  - `loadingScreen` now has a `preloader` object (see README for properties)
  - `backgroundColor`
  - `textColor`
  - `icon.backgroundColor`
  - `icon.textColor`
  - `preloader` & `progress` keep `color`
- Improved schemas for advanced components. Schemas are available in `Components._schemas`.
- Added `chip` component.
- `materialize:materialize` is no longer included automatically.
