var MenuView = Backbone.View.extend({
  /*
  tagName: "",
  className: "",
  */
  events: {
    "click .emailContact": "sendEmail",
    //"click #slide-menu-button":
  },
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
    $('.side-nav').html(this.el.children[0]);
    //this.setControls();
    return this;
  },
  beforeRender: function(){},
  afterRender: function(){
    this.setControls();
  },
  setControls: function(){
    var that = this;
    console.log("setting controls for slider menu");
    var slideMenuButton = document.getElementById('slide-menu-button');
    if (slideMenuButton){
      slideMenuButton.onclick = function (e) {
          var cl = document.body.classList;
          //var cl = document.getElementById('appSliderMenu').classList;
          if (cl.contains('left-nav')) {
              that.closeMenu();
          } else {
              that.openMenu();
          }
      };
    }
    /*
    var emailContactMenuEntry = document.getElementsByClassName('emailContact')[0];
    if (emailContactMenuEntry){
      console.log('succesfully created onclick for mail menu');
      emailContactMenuEntry.onclick = function(){
        that.sendEmail();
      };
    }else{
      console.log('cant create on click for email contact menu');
    }
    */
  },
  openMenu: function(){
    var cl = document.body.classList;
    cl.add('left-nav');
    $('.main-container').addClass('left-nav');
  },
  closeMenu: function(){
    var cl = document.body.classList;
    cl.remove('left-nav');
    $('.main-container').removeClass('left-nav');
  },

  sendEmail: function(){
      cordova.plugins.email.open({
          to:      'max@mustermann.de',
          cc:      'erika@mustermann.de',
          bcc:     ['john@doe.com', 'jane@doe.com'],
          subject: 'Greetings',
          body:    'How are you? Nice greetings from Leipzig'
      });
  }

});
