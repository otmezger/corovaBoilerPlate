var NewReportDetailsView = Backbone.View.extend({
  viewTitle: 'Detalles del reporte',

  events: {
    "click .newPhoto":          "uploadPicture",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(Handlebars.templates.newReportDetails(this));
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    //$("#whatever").addClass("active"); // add the active class

    this.unselectMenu();
    var that = this;
    setTimeout(function(){
      that.adjustHeights();
    },200);
    this.delegateEvents();
    $("#newReportDetails").addClass("is-active"); // add the active class
    return this;
  },
  adjustHeights:function(){
    var width = $('.photoContainer').width();
    $('.photoContainer').css({'height':width+'px'});
    $('.photoContainer>p').css({'line-height':width+'px'});
  },
  uploadPicture:function(){
    $('.photosRow').prepend('<div class="topcoat-grid__column--3"><div class="photoContainer photoTemp"></div></div> <!-- end of column -->');
    this.adjustHeights();

  }

});
