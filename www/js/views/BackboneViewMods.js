Backbone.View.prototype.unselectMenu =  function(){
    $('nav.side-nav>.topcoat-list__container>.topcoat-list>.topcoat-list__item').removeClass('is-active');
  };

Backbone.View.prototype.cancelReportCreation = function(){
    myApp.reportModel = new ReportModel();
    Backbone.history.navigate('#/home');
  };
