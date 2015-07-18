Template.progress.helpers({
  type: function() {
    return _.contains(["determinate", "indeterminate"], this.type) ? this.type : "indeterminate";
  },
  style: function() {
    return this.type === "determinate" ? { style: "width:" + (this.percent || 0) + "%;" } : "";
  }
});
