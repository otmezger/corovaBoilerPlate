var NewReportCategoryView = Backbone.View.extend({
  viewTitle: 'New Report Category',
  /*
  tagName: "",
  className: "",
  */
  events: {
    "click .cancelButton-Text":          "continueToNextScreen",
  },

  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(Handlebars.templates.newReportCategory());
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    //$("#whatever").addClass("active"); // add the active class

    this.unselectMenu();
    $("#newReportCategory").addClass("is-active"); // add the active class
    return this;
  },
  continueToNextScreen: function(){
    console.log('bla');
  }

});
