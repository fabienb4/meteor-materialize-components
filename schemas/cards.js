Components._schemas.cardSchema = new SimpleSchema({
  cardPanel:       { type: Boolean, optional: true },
  reveal:          { type: Boolean, optional: true },
  backgroundColor: Components._schemas.BACKGROUND_COLOR,
  textColor:       Components._schemas.TEXT_COLOR,
  size:            { type: String, allowedValues: Components.Cards.SIZES, optional: true },
  title:           { type: String, optional: true },
  content:         { type: String },
  image:           { type: String, optional: true },
  actions:         { type: [Components._schemas.linkSchema], optional: true }
});

Components.Cards.attachSchema(Components._schemas.cardSchema);
