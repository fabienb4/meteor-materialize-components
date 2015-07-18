var sliderSlideCaptionSchema = new SimpleSchema({
  alignment:    { type: String, allowedValues: Components.Sliders.ALIGNMENTS },
  titleColor:   { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
  title:        { type: String, optional: true },
  contentColor: { type: String, allowedValues: Materialize.TEXT_COLORS, optional: true },
  content:      { type: String, optional: true }
});

var sliderSlideSchema = new SimpleSchema({
  image:   { type: String, optional: true },// FIXME: change to use cfs uploaded image
  caption: { type: sliderSlideCaptionSchema, optional: true }
});

var sliderSchema = new SimpleSchema({
  fullscreen: { type: Boolean, defaultValue: false, optional: true },
  slides:     { type: [sliderSlideSchema] }
});

Components.Sliders.attachSchema(sliderSchema);
