Template.parallax.onRendered(function() {
  this.$(".parallax").parallax();
});

Template.parallax.helpers({
  style: function() {
    return this.height && { style: "height:" + this.height + "px;" };
  }
});
