Template.modal.onRendered(function() {
  this.$(".modal-trigger").leanModal();
});

Template.modal.helpers({
   type: function() {
     var TYPES = ["modal-fixed-footer", "bottom-sheet"];

     return _.contains(TYPES, this.type) ? this.type : "";
   }
});
