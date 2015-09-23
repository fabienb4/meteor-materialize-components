Template.icon.helpers({
  size: function() {
    const SIZES = ["tiny", "small", "medium", "large"];

    return _.contains(SIZES, this.size) ? this.size : "";
  },
  aligment: function() {
    const ALIGMENTS = ["left", "right"];

    return _.contains(ALIGMENTS, this.aligment) ? this.aligment : "";
  }
});
