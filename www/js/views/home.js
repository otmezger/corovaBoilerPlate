var HomeView = Backbone.View.extend({
  viewTitle: 'Home View',
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
    console.log('in render of home');
    this.$el.html(Handlebars.templates.home());

    this.unselectMenu();
    $("#home").addClass("is-active"); // add the active class
    //myApp.mapView.render();
    return this;
  }

});
