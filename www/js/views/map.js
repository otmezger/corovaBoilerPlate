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
  },

  render: function() {
    this.makeMap();
    //return this;
  },
  makeMap: function(){
    var map = L.map('map');

    L.tileLayer('https://api.tiles.mapbox.com/v4/MapID/997/256/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3RtZXpnZXIiLCJhIjoiYmE2OWZmNzBjZTVkZTQ3ODczMjE5N2I1NmZkMmYyNDkifQ.IydOg1-YXjs817nryXUP3Q', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);
  }

});
