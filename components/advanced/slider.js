Template.slider.onRendered(function() {
  this.$(".slider").slider(_.extend({ full_width: true }, this.data.options));
});
