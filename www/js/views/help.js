var HelpView = Backbone.View.extend({
  viewTitle: 'Help',
  events: {
    "click .emailContact": "sendEmail",
    //"view-has-renderd": "afterRender",
    //"click #slide-menu-button":
  },
  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(Handlebars.templates.help());
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    //$("#whatever").addClass("active"); // add the active class
    this.delegateEvents();
    this.unselectMenu();
    $("#help").addClass("is-active"); // add the active class

    var that = this;
    setTimeout(function(){
        that.setHeight();
    },10)


    return this;
  },
  afterRender:function(){
    console.log('fired afterRender');
    this.setHeight;
  },
  setHeight:function(){
    // this function sets the height of the text box above the email button.

    var mainContainerHeight = $('.main-container').height();
    var marginBottom = 130; // in px.
    $('.fixedHeightHelpBox').css({'height':mainContainerHeight - marginBottom + "px"});
  }

});
