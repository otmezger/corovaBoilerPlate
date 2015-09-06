var MenuView = Backbone.View.extend({
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
    _.bindAll(this, 'beforeRender', 'render', 'afterRender');
    var _this = this;
    this.render = _.wrap(this.render, function(render) {
      _this.beforeRender();
      render();
      _this.afterRender();
      return _this;
    });
  },

  render: function() {
    console.log('in render of menu');
    this.$el.html(Handlebars.templates.menu());
    $('#appSliderMenu').html(this.el);
    //this.setControls();
    return this;
  },
  beforeRender: function(){},
  afterRender: function(){
    this.setControls();
  },
  setControls: function(){
    console.log("setting controls for slider menu");
    var slideMenuButton = document.getElementById('slide-menu-button');
    slideMenuButton.onclick = function (e) {
        var cl = document.body.classList;
        //var cl = document.getElementById('appSliderMenu').classList;
        if (cl.contains('left-nav')) {
            cl.remove('left-nav');
            $('.main-container').removeClass('left-nav');
        } else {
            cl.add('left-nav');
            $('.main-container').addClass('left-nav');
        }
    };
  }

});
