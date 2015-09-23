Components._schemas.parallaxSchema = new SimpleSchema({
  image:  { type: String },
  height: { type: Number, optional: true }
});

Components.Parallaxes.attachSchema(Components._schemas.parallaxSchema);
