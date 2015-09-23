const COLORS = ["blue", "red", "yellow", "green"];

Template.preloader.helpers({
  size: function() {
    const SIZES = ["big", "small"];

    return _.contains(SIZES, this.size) ? this.size : "";
  },
  active: function() {
    return this.active === false ? false : true;
  },
  color: function() {
    if (_.contains(COLORS, this.color)) {
      return this.flashing ? this.color : this.color + "-only";
    } else {
      return this.flashing ? COLORS[0] : COLORS[0] + "-only";
    }
  },
  colors: function() {
    return COLORS;
  }
});
