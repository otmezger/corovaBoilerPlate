var NewReportCategoryView = Backbone.View.extend({
  viewTitle: 'New Report Category',
  /*
  tagName: "",
  className: "",
  */
  events: {
    "click .cancelButton":          "cancelReportCreation",
    "click .reportCategoryButton":          "continueWithNextScreen",
  },

  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
    _.bindAll(this, 'beforeRender', 'render', 'afterRender');
    var _this = this;
    this.render = _.wrap(this.render, function(render) {
      _this.beforeRender().then(function(){
        return render();
      }).then(function(){
        return _this.afterRender();
      });
      //render();
      //_this.afterRender();
      return _this;
    });
  },
  beforeRender: function(){
    this.undelegateEvents();
    var a = new $.Deferred();
    return a.resolve();
  },

  render: function() {
    this.$el.html(Handlebars.templates.newReportCategory(this));
    this.unselectMenu();
    //$("#newReportCategory").addClass("is-active"); // add the active class
    $('.reportViewInMap').html(this.el);
    $('.reportViewInMap').css({'visibility':'initial'});
    $('.reportViewInMap').css("display","block");
    $('.createReportButtonContainer').hide();

    //this.setCategoryButtonWidth();
    var a = new $.Deferred();
    return a.resolve();
  },
  afterRender: function(){
    var that = this;
    this.delegateEvents();
    setTimeout(function(){
        that.setDeviceSpecificSizes();
    },10);


    var a = new $.Deferred();
    return a.resolve();
  },
  setDeviceSpecificSizes: function(){
    console.log('running setDeviceSpecificSizes');
    var width = $('.reportCategoryButton').width();

    $('.reportCategoryButton').css({'height':width+'px'});


    // this here is deprecated!
    if (width <= 90){
      // screen is small, we need to adapt the size of the text
      $('.reportCategoryButton-Text>div>p>i').css({'font-size': '200%'});
    }
    // should be like htis:
    this.setReportViewInMapDeviceSpecSizes();
  },
  continueWithNextScreen: function(e){
    var $el = $(e.currentTarget);
    var categoryID = $el.attr('categoryID');
    console.log(categoryID);
    this.reportModel.set('categoryModel',this.reportCategoryCollection.getReportCategoryByCategoryID(categoryID));

    //myApp.newReportDetailsViewer();
    //Backbone.history.navigate('#/newReportDetails');
    myApp.newReportDetailsView.render();
  },


});
