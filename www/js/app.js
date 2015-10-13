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
    //this.menuView.render();
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
    this.helpViewer = new HelpView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.newReportMap = new NewReportMapView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.newReportCategory = new NewReportCatogoryView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.newReportDetails = new NewReportDetailView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.tutorial = new TutorialView();
    // ----------------------------------------------------WHATEVER
    //                                                         |-----> Model
    //                                                         |-----> Collection
    //                                                         |-----> View
    this.map = new MapView();

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
    this.renderViewScroller(this.helpViewer);
  },
  newReportMapViewer: function () {
    this.renderViewScroller(this.newReportMapViewer);
  },
  newReportCategoryViewer: function () {
    this.renderViewScroller(this.newReportCategoryViewer);
  },
  newReportDetailsViewer: function () {
    this.renderViewScroller(this.newReportDetailsViewer);
  },
  tutorialViewer: function () {
    this.renderViewScroller(this.tutorialViewer);
  },
  mapViewer: function () {
    this.renderViewScroller(this.mapViewer);
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
