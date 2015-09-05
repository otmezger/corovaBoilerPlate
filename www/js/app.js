var AppRouter = Backbone.Router.extend({
  routes: {
    "home": "homeViewer",
    "whatever": "whateverViewer",
  },

  // ------------------------------------------------------
  // ------------------------------------------------------

  initialize: function () {
    var self = this;
    // ----------------------------------------------------HOME
    //                                                         |-----> Model
    //                                                         |-----> Collection
    // this.homeCollection = new HomeCollection();
    // this.homeCollection.fetch();
    //                                                         |-----> View
    this.homeView = new HomeView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.whateverView = new WhateverView();

  }, // end of initlialize
  // ------------------------------------------------------
  /************************************************************************************
                                    VIEW FUNCTIONS
  ************************************************************************************/
  /*renderViewIfLoggedIn:function(theView){
    if (Parse.User.current()){
      this.renderViewScroller(theView);
    }else{
      this.loginViewer();
    }

  },*/
  renderViewScroller:function(theView){
    console.log('going to render a new view');
    $('#app').html(theView.render().el);
    //$('#mini-nav').html(this.miniNavView.render().el);
    window.scrollTo(0,0); // scroll to the top
  },
  // ------------------------------------------------------ VIEWERS
  homeViewer: function () {
    console.log('going into the home view');
    this.renderViewScroller(this.homeView);
  },
  whateverViewer: function () {
    this.renderViewScroller(this.whateverView);
  },
});
var myApp;
function initializeMyApp(){
  console.log('initialing my app');
  myApp = new AppRouter();
  Backbone.history.start();
};
document.addEventListener("deviceready", initializeMyApp, false);
//var app = new AppRouter();

$(document).ready(function(){
  console.log('document ready');
}); // whatever we need to run here
