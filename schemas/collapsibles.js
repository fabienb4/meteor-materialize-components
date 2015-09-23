Components._schemas.collapsibleItemSchema = new SimpleSchema({
  active:    { type: Boolean, optional: true },
  icon:      { type: Components._schemas.iconSchema, optional: true },
  title:     { type: String },
  content:   { type: String }
});

Components._schemas.collapsibleSchema = new SimpleSchema({
  backgroundColor: Components._schemas.BACKGROUND_COLOR,
  textColor:       Components._schemas.TEXT_COLOR,
  popout:          { type: Boolean, optional: true },
  type:            { type: String, allowedValues: Components.Collapsibles.TYPES },
  items:           { type: [Components._schemas.collapsibleItemSchema] }
});

Components.Collapsibles.attachSchema(Components._schemas.collapsibleSchema);
