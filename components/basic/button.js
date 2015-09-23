Template.button.helpers({
  classes: function() {
    let classes = "";

    if (this.waves) {
      classes += " waves-effect waves-light";
    }

    if (this.floating) {
      classes += " btn-floating";
    } else if (this.flat) {
      classes += " btn-flat";
    } else {
      classes += " btn";
    }

    if (this.options && this.options["data-activates"]) {
      classes += " dropdown-button";
    }

    if (this.modalTrigger) {
      classes += " modal-trigger";
    }

    if (this.modalAction) {
      classes += " " + this.modalAction;
    }

    if (this.backgroundColor) {
      classes += " " + this.backgroundColor;
    }

    if (this.textColor) {
      classes += " " + this.textColor;
    }

    if (this.large) {
      classes += " btn-large";
    }

    if (this.disabled) {
      classes += " disabled";
    }

    return classes;
  },
  iconSide: function() {
    return (this.icon && ! this.icon.alignment) ? "left" : this.icon.alignment;
  }
});
