Components._schemas.sliderSlideCaptionSchema = new SimpleSchema({
  alignment:    { type: String, allowedValues: Components.Sliders.ALIGNMENTS },
  titleColor:   Components._schemas.TEXT_COLOR,
  title:        { type: String, optional: true },
  contentColor: Components._schemas.TEXT_COLOR,
  content:      { type: String, optional: true }
});

Components._schemas.sliderSlideSchema = new SimpleSchema({
  image:   { type: String, optional: true },
  caption: { type: Components._schemas.sliderSlideCaptionSchema, optional: true }
});

Components._schemas.sliderSchema = new SimpleSchema({
  fullscreen: { type: Boolean, defaultValue: false, optional: true },
  slides:     { type: [Components._schemas.sliderSlideSchema] }
});

Components.Sliders.attachSchema(Components._schemas.sliderSchema);
