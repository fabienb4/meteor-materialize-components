Components._schemas = {};

Components._schemas.ICON = {
  type:          String,
  allowedValues: Materialize.ICONS
};

Components._schemas.BACKGROUND_COLOR = {
  type:          String,
  allowedValues: Materialize.BACKGROUND_COLORS,
  optional:      true
};

Components._schemas.TEXT_COLOR = {
  type:          String,
  allowedValues: Materialize.TEXT_COLORS,
  optional:      true
};

Components._schemas.iconSchema = new SimpleSchema({
  name:            Components._schemas.ICON,
  backgroundColor: Components._schemas.BACKGROUND_COLOR,
  textColor:       Components._schemas.TEXT_COLOR
});

Components._schemas.linkSchema = new SimpleSchema({
  link:     { type: String },
  linkText: { type: String }
});
