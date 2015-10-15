var NewReportCategoryView = Backbone.View.extend({
  viewTitle: 'New Report Category',
  /*
  tagName: "",
  className: "",
  */
  events: {
    "click .cancelButton":          "cancelAction",
    "click .reportCategoryButton":          "continueWithNextScreen",
  },

  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(Handlebars.templates.newReportCategory(this));
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    //$("#whatever").addClass("active"); // add the active class

    this.unselectMenu();
    $("#newReportCategory").addClass("is-active"); // add the active class
    return this;
  },
  cancelAction: function(){
    myApp.homeViewer();
  },
  continueWithNextScreen: function(e){
    var $el = $(e.currentTarget);
    var categoryID = $el.attr('categoryID');
    console.log(categoryID);
    this.reportModel.set('categoryModel',this.reportCategoryCollection.getReportCategoryByCategoryID(categoryID));
    myApp.newReportDetailsViewer();
  },


});
