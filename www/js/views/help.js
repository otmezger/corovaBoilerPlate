var HelpView = Backbone.View.extend({
  viewTitle: 'Help',
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
    this.$el.html(Handlebars.templates.help());
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    //$("#whatever").addClass("active"); // add the active class

    this.unselectMenu();
    $("#help").addClass("is-active"); // add the active class

    var that = this;
    setTimeout(function(){
        that.setHeight();
    },200)


    return this;
  },
  setHeight:function(){
    // this function sets the height of the text box above the email button.

    var mainContainerHeight = $('.main-container').height();
    var marginBottom = 130; // in px. 
    $('.fixedHeightHelpBox').css({'height':mainContainerHeight - marginBottom + "px"});
  }

});
