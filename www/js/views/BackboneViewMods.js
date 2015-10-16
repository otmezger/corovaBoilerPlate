Backbone.View.prototype.unselectMenu =  function(){
  $('nav.side-nav>.topcoat-list__container>.topcoat-list>.topcoat-list__item').removeClass('is-active');
};

Backbone.View.prototype.cancelReportCreation = function(){
  myApp.reportModel = new ReportModel();
  Backbone.history.navigate('#/home');
};


Backbone.View.prototype.sendEmail =  function(){
  cordova.plugins.email.open({
      to:      'max@mustermann.de',
      cc:      'erika@mustermann.de',
      bcc:     ['john@doe.com', 'jane@doe.com'],
      subject: 'Greetings',
      body:    'How are you? Nice greetings from Leipzig'
  });
};
