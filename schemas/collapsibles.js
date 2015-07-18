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

Components.Collapsibles.attachSchema(collapsibleSchema);
