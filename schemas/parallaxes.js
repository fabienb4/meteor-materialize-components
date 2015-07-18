var parallaxSchema = new SimpleSchema({
  image:  { type: String },// FIXME: change to use cfs uploaded image
  height: { type: Number, optional: true }
});

Components.Parallaxes.attachSchema(parallaxSchema);
