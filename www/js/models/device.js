var DeviceModel = Backbone.Model.extend({
  initialize:function(){
    this.set('OS',window.device.platform);
    this.set('OEM',window.device.manufacturer);
    this.set('UUID',window.device.uuid);
    this.set('OSversion',window.device.version);
    this.set('height_px',screen.height);
    this.set('width_px',screen.width);
    this.set('cordovaVersion',window.device.cordova);
    this.set('phoneModel',this.getPhoneModel());

  },
  getPhoneModel : function(){
    if (this.attributes.OS == 'iOS' && this.attributes.OEM == 'Apple'){
      // this is iOS
      switch (this.attributes.height_px){
        case 480:
          // might be iphone 2G, 3G, 3GS, 4 and 4S
          return 'iPhone 4x';
          break;
        case 568:
          // ca be iPhone 5 and iPhone 5S
          return 'iPhone 5x';
          break;
        case 667:
          return 'iPhone 6';
          break;
        case 736:
          return 'iPhone 6 Plus'
          break;
        default:
          // put here some analytics event recording this exception.
          return 'undefined';
          break;
      }
    }else{
      if (this.attributes.OS == 'Android'){
        switch (this.attributes.height_px){
          case 2560:
          case 2368:
            return 'Nexus 6';
            break;
          case 1920:
            return 'Nexus 5';
            break;
        }// end of switch height_px
      }
      // not iOS
    }
  },
  
});
