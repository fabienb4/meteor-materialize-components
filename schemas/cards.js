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

Components.Cards.attachSchema(cardSchema);
