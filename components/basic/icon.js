Template.icon.helpers({
  size: function() {
    var SIZES = ["tiny", "small", "medium", "large"];

    return _.contains(SIZES, this.size) ? this.size : "";
  },
  aligment: function() {
    var ALIGMENTS = ["left", "right"];

    return _.contains(ALIGMENTS, this.aligment) ? this.aligment : "";
  }
});
