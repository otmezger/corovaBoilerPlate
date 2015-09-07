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
    //$("header>div>ul.nav>li.active").removeClass("active"); // remove the active class
    $('nav.side-nav>topcoat-list__container>topcoat-list>topcoat-list__item').removeClass('is-active');

    //$("#home").addClass("active"); // add the active class
    $("#home").addClass("is-active"); // add the active class
    return this;
  }

});
