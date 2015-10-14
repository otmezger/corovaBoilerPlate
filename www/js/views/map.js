var MapView = Backbone.View.extend({
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
    console.log('on before render for map');
    a = new $.Deferred()
    return a.resolve();
  },
  render: function() {
    console.log('rendering map');
    return this.$el.html(Handlebars.templates.map());

    //this.makeMap();
    //return this;
    a = new $.Deferred()
    return a.resolve();
  },
  afterRender:function(){
    console.log('on AFTER render for map');
    var that = this;
    setTimeout(function () {
      that.makeMap();
    }, 1000);
    //this.makeMap();
    a = new $.Deferred()
    return a.resolve();
  },
  makeMapMapBox_deprecated: function(){
    this.map = L.map('mapCanvas').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/256/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'otmezger.7916b706/997',
      accessToken: 'pk.eyJ1Ijoib3RtZXpnZXIiLCJhIjoiYmE2OWZmNzBjZTVkZTQ3ODczMjE5N2I1NmZkMmYyNDkifQ.IydOg1-YXjs817nryXUP3Q',
      maxZoom: 18
    }).addTo(this.map);
    //this.map.locate({setView: true, maxZoom: 16});
    //this.map.on('locationfound', onLocationFound);
  },
  onLocationFound:function(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }





});
