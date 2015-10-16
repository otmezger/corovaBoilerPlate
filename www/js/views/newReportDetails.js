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
    this.undelegateEvents();
    this.$el.html(Handlebars.templates.newReportDetails(this));
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    //$("#whatever").addClass("active"); // add the active class

    $('.reportViewInMap').html(this.el);
    $('.reportViewInMap').css({'visibility':'initial'});
    $('.createReportButtonContainer').hide();

    this.unselectMenu();
    var that = this;

    this.miniatureViews = [];

    this.miniatureViews.push(new PictureMiniatureView());


    setTimeout(function(){
      that.miniatureViews[0].render();
      that.adjustHeights();
    },10);
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
    this.miniatureViews.push(new PictureMiniatureView());
    var picIndex =  this.miniatureViews.length-1;// the last added picture.
    this.miniatureViews[picIndex].pictureModel = new PictureModel();
    this.miniatureViews[picIndex].render();

    this.adjustHeights();

  }

});


var PictureMiniatureView = Backbone.View.extend({
  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    this.$el.html(Handlebars.templates.pictureMiniatureView(this));
    $('.photosRow').prepend(this.el.childNodes);
    //$('.photosRow').prepend('<div class="topcoat-grid__column--3"><div class="photoContainer photoTemp"></div></div> <!-- end of column -->');

    return this;
  }
});
