var NewReportMapView = Backbone.View.extend({
  viewTitle: 'New report map',
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
    this.$el.html(Handlebars.templates.newReportMap());

    this.unselectMenu();
    $("#newReportMap").addClass("is-active"); // add the active class

    
    //$('#reportViewInMap').html(myApp.newReportCategoryView.el)
    return this;
  }

});
