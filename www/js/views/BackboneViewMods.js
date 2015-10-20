Backbone.View.prototype.unselectMenu =  function(){
  $('nav.side-nav>.topcoat-list__container>.topcoat-list>.topcoat-list__item').removeClass('is-active');
};

Backbone.View.prototype.cancelReportCreation = function(){
  myApp.reportModel = new ReportModel();
  //Backbone.history.navigate('#/map');
  $('.reportViewInMap').hide();
  $('.createReportButtonContainer').show();
  Backbone.View.prototype.normalMap();
  Backbone.View.prototype.showMenu();
};


Backbone.View.prototype.sendEmail =  function(){
  cordova.plugins.email.open({
      to:      'avisame@curridabat.go.cr',
      //cc:      'erika@mustermann.de',
      //bcc:     ['john@doe.com', 'jane@doe.com'],
      subject: 'Contacto de Yo Alcalde',
      //body:    ''
  });
};

Backbone.View.prototype.hideMenu =  function(){
  $('.slide-menu-button').css("display", "none");
};

Backbone.View.prototype.showMenu =  function(){
  $('.slide-menu-button').css("display", "inherit");
};

Backbone.View.prototype.setReportViewInMapDeviceSpecSizes =  function(){
  switch (myApp.deviceModel.attributes.phoneModel){
    case 'iPhone 4x':
      $('.reportDetailContainer').css({'height': 55+'vh'});
      $('.reportViewInMap').css({
        'height': 'calc(100% - 100px)',
        'top':'100px'
      });
      // for the reportDetailsScreen
      $('.newPhoto>p>i').css({'font-size':'200%'});
      break;
    case 'iPhone 5x':
    case 'Nexus 5':
      $('.reportDetailContainer').css({'height': 53+'vh'});

      // for the reportDetailsScreen
      $('.newPhoto>p>i').css({'font-size':'200%'});
      break;
    case 'iPhone 6':
    case 'Nexus 6':
        $('.reportDetailContainer').css({'height': 55+'vh'});
        $('.reportCategoryButton-Text>div>p').css({'margin-top':0+'px'});
        $('.reportViewInMap').css({'height': 'calc(100% - 150px)','top':'150px'});

        // for the reportDetailsScreen
        $('.newPhoto>p>i').css({'font-size':'300%'});

        break;
    case 'iPhone 6 Plus':
      $('.reportDetailContainer').css({'height': 55+'vh'});
      $('.reportCategoryButton-Text>div>p').css({'margin-top':0+'px'});
      $('.reportViewInMap').css({'height': 'calc(100% - 200px)','top':'200px'});
      // for the reportDetailsScreen
      $('.newPhoto>p>i').css({'font-size':'320%'});
      break;

  }
};

Backbone.View.prototype.upsideMap = function(){
  $('#mapCanvas').css({'top':'-36%'});
};

Backbone.View.prototype.normalMap = function(){
  $('#mapCanvas').css('top','0%');
};
