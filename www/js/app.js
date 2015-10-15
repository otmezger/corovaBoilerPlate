var AppRouter = Backbone.Router.extend({
  routes: {
    "home": "homeViewer",
    "help": "helpViewer",
    "newReportMap": "newReportMapViewer",
    "newReportCategory": "newReportCategoryViewer",
    "newReportDetails": "newReportDetailsViewer",
    "tutorial": "tutorialViewer",
    "map" : "mapViewer"
  },

  // ------------------------------------------------------
  // ------------------------------------------------------

  initialize: function () {
    var self = this;
    // ----------------------------------------------------Menu
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.menuView = new MenuView();
    this.menuView.render();
        // the menu need to be renderd at once

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
    this.helpView = new HelpView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.newReportMapView = new NewReportMapView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.newReportCategoryView = new NewReportCategoryView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.newReportDetailsView = new NewReportDetailsView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.tutorialview = new TutorialView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.mapView = new MapView();

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
    $('.topcoat-navigation-bar__title').html(theView.viewTitle);
    //$('#mini-nav').html(this.miniNavView.render().el);
    window.scrollTo(0,0); // scroll to the top
    // then, we close the menu!
    this.menuView.closeMenu();
  },
  // ------------------------------------------------------ VIEWERS
  homeViewer: function () {
    console.log('going into the home view');
    this.renderViewScroller(this.homeView);
  },
  helpViewer: function () {
    this.renderViewScroller(this.helpView);
  },
  newReportMapViewer: function () {
    this.renderViewScroller(this.newReportMapView);
  },
  newReportCategoryViewer: function () {
    //this.newReportCategoryView.render();
    //$("#reportViewInMap").html(this.el);
    this.renderViewScroller(this.newReportCategoryView);
  },
  newReportDetailsViewer: function () {
    this.renderViewScroller(this.newReportDetailsView);
  },
  tutorialViewer: function () {
    this.renderViewScroller(this.tutorialView);
  },
  mapViewer: function () {
    this.renderViewScroller(this.mapView);
  }
});
var myApp;
function initializeMyApp(){
  console.log('initialing my app');
  myApp = new AppRouter();
  Backbone.history.start();
  myApp.menuView.setControls();
  myApp.renderViewScroller(myApp.homeView); // default view.
};
document.addEventListener("deviceready", initializeMyApp, false);
//var app = new AppRouter();

$(document).ready(function(){
  console.log('document ready');
}); // whatever we need to run here
