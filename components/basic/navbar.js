Template.navbar.onRendered(function() {
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});

Template.navbar.helpers({
  linksSide: function() {
    return this.title && this.title.side === "right" ? "left" : "right";
  }
});

Template.navbarLink.helpers({
  linkText: function() {
    if (this.linkText) {
      return this.linkText;
    } else {
      if (this.link) {
        return this.link;
      } else if (this.page) {
        return _.startCase(this.page);
      }
    }
  },
  iconSide: function() {
    if (this.icon) {
      if (! this.icon.alignment) {
        return "left";
      } else {
        return this.icon.alignment;
      }
    }
  }
});
