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

Components.Collections.attachSchema(collectionSchema);
