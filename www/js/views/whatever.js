var WhateverView = Backbone.View.extend({
  /*
  tagName: "",
  className: "",
  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },
  */
  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(Handlebars.templates.whatever());
    $("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    $("#whatever").addClass("active"); // add the active class
    return this;
  }

});
