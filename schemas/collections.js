Components._schemas.collectionItemAvatarSchema = new SimpleSchema({
  image: { type: String, optional: true },
  icon:  { type: Components._schemas.iconSchema, optional: true }
});

Components._schemas.collectionItemSecondaryContentSchema = new SimpleSchema({
  link: { type: String },
  icon: { type: Components._schemas.iconSchema, optional: true }
});

Components._schemas.collectionItemSchema = new SimpleSchema({
  dismissable:      { type: Boolean, optional: true },
  avatar:           { type: Components._schemas.collectionItemAvatarSchema, optional: true },
  title:            { type: String, optional: true },
  content:          { type: String },
  secondaryContent: { type: Components._schemas.collectionItemSecondaryContentSchema, optional: true }
});

Components._schemas.collectionSchema = new SimpleSchema({
  backgroundColor: Components._schemas.BACKGROUND_COLOR,
  textColor:       Components._schemas.TEXT_COLOR,
  links:           { type: [Components._schemas.linkSchema], optional: true },
  header:          { type: String, optional: true },
  items:           { type: [Components._schemas.collectionItemSchema], optional: true }
});

Components.Collections.attachSchema(Components._schemas.collectionSchema);
