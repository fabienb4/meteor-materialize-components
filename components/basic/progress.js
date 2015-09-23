Template.progress.helpers({
  type: function() {
    const TYPES = ["determinate", "indeterminate"];

    return _.contains(TYPES, this.type) ? this.type : "indeterminate";
  },
  style: function() {
    return this.type === "determinate" ? { style: "width:" + (this.percent || 0) + "%;" } : "";
  }
});
