var MapView = Backbone.View.extend({
  viewTitle: '',
  gpsOptions:{
    'maximumAge': 3000, //maximumAge: Accept a cached position whose age is no greater than the specified time in milliseconds. (Number)
    'timeout': 10000, // timeout: The maximum length of time (milliseconds) that is allowed to pass from the call to navigator.geolocation.getCurrentPosition or geolocation.watchPosition until the corresponding geolocationSuccess callback executes. If the geolocationSuccess callback is not invoked within this time, the geolocationError callback is passed a PositionError.TIMEOUT error code. (Note that when used in conjunction with geolocation.watchPosition, the geolocationError callback could be called on an interval every timeout milliseconds!) (Number)
    'enableHighAccuracy': true, // enableHighAccuracy: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning. (Boolean)
  },
  events: {
    "click .createButton": "createNewReport",
  },
  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
    _.bindAll(this, 'beforeRender', 'render', 'afterRender');
    var _this = this;
    this.render = _.wrap(this.render, function(render) {
      _this.beforeRender().then(function(){
        return render();
      }).then(function(){
        return _this.afterRender();
      });
      //render();
      //_this.afterRender();
      return _this;
    });
  },
  beforeRender: function(){
    this.undelegateEvents();
    a = new $.Deferred()
    return a.resolve();
  },
  render: function() {


    console.log('rendering map');
    $('.reportViewInMap').css({'visibility':'hidden'});
    return this.$el.html(Handlebars.templates.map());

    //this.makeMap();
    //return this;
    a = new $.Deferred()
    return a.resolve();
  },
  afterRender:function(){
    console.log('on AFTER render for map');
    this.delegateEvents();
    var that = this;
    setTimeout(function () {
      //that.makeMapGoogle();
      that.makeMapMapBox();
    }, 10);
    //this.makeMap();
    a = new $.Deferred()
    return a.resolve();
  },
  /*makeMapGoogle: function(){
    //this.map;
    var div = document.getElementById("mapCanvas");

    // Initialize the map view
    this.map = plugin.google.maps.Map.getMap(div);

    // Wait until the map is ready status.
    //map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
  },*/
  makeMapMapBox: function(){

    this.map = L.map('mapCanvas',
    {
      zoomControl:false
    }).setView([9.9136, -84.0389], 14);
    map = this.map;

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
      //id: 'otmezger.7916b706',
      id: 'mapbox.pirates',
      //id: 'mapbox.light',
      accessToken: 'pk.eyJ1Ijoib3RtZXpnZXIiLCJhIjoiYmE2OWZmNzBjZTVkZTQ3ODczMjE5N2I1NmZkMmYyNDkifQ.IydOg1-YXjs817nryXUP3Q',
      maxZoom: 18
    }).addTo(this.map);
    //this.map.locate({setView: true, maxZoom: 16});
    //this.map.on('locationfound', onLocationFound);
  },
  /*onLocationFound:function(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(this.map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  },*/
  createNewReport:function(){
    console.log('going to createNewReport');
    myApp.newReportCategoryView.render();
  },

  initializeGPS:function(){
    // this function starts the GPS location service
    // onSuccess Callback

    // example from: https://github.com/apache/cordova-plugin-geolocation
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //

    // Options: throw an error if no update is received every 30 seconds.
    //
    var that = this;
    this.GPSWatchID = navigator.geolocation.watchPosition(
      that.onLocationFound, // succes callback.
      that.onLocationError, // error callback
      that.gpsOptions); // options

  },
  stopGPS: function(){
    // this function stops the GPS location service
    navigator.geolocation.clearWatch(this.GPSWatchID);
  },
  onLocationFound: function(position){
    // this function runs every time we get a valid GPS fix
    console.log(position);
    var radius = position.coords.accuracy / 2;

    position.coords.latlng = L.latLng(position.coords.latitude, position.coords.longitude);// https://www.mapbox.com/mapbox.js/api/v2.2.2/l-latlng/
    if (this.currentMarkerPin){
      this.map.removeLayer(this.currentMarkerPin);
    }
    this.currentMarkerPin = new L.marker(position.coords.latlng);
    this.map.addLayer(this.currentMarkerPin);
    this.currentMarkerPin.bindPopup("You are within " + radius + " meters from this point").openPopup();


    if (this.currentMarkerCircle){
      this.map.removeLayer(this.currentMarkerCircle);
    }
    this.currentMarkerCircle = new L.circle(position.coords.latlng, radius);
    this.map.addLayer(this.currentMarkerCircle);


  },
  onLocationError: function(error){
    //this function runs every time the GPS returns an error
    console.log(error);
  },
  updateGPSMarker:function(){
    // this function draws the GPS mark on the map

  }




});
