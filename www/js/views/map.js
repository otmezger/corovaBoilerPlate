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
      _this.beforeRender();
      render();
      _this.afterRender();
      return _this;
    });
  },
  beforeRender: function(){
    console.log('on before render for map');
  },
  render: function() {
    this.$el.html(Handlebars.templates.map());
    console.log('done rendering map');
    //this.makeMap();
    //return this;
  },
  afterRender:function(){
    console.log('on AFTER render for map');
    this.makeMap();
  },
  makeMap: function(){
    var map = L.map('mapCanvas');
    L.tileLayer('https://api.tiles.mapbox.com/v4/otmezger.7916b706/997/256/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3RtZXpnZXIiLCJhIjoiYmE2OWZmNzBjZTVkZTQ3ODczMjE5N2I1NmZkMmYyNDkifQ.IydOg1-YXjs817nryXUP3Q', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);
  }

});
