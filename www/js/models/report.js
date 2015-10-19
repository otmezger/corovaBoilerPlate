var ReportModel = Backbone.Model.extend({

});


var ReportCollection = Backbone.Collection.extend({
  model: ReportModel,
  populateManual:function(){
    //this function adds all manual models to the collection. in a perfect world, this will be generated via a fetch from the server
    for(var i=0; i<30;i++){
      var newReportModel = new ReportModel();
      var categoryModel = myApp.reportCategoryCollection.models[Math.floor(Math.random() * myApp.reportCategoryCollection.length)];
        // cool trick, from http://stackoverflow.com/a/4550514/1862909
      newReportModel.set('category',categoryModel);

      var lat_0 = 9.911552;
      var lng_0 = -84.03583;

      var r = 1000; // radius in meters
      var r_degree = r / 111300;

      var u = Math.random();
      var v = Math.random();
      var w = r_degree * Math.sqrt(u);
      var t = 2 * Math.PI * v;
      x = w * Math.cos(t) ;
      y = w * Math.sin(t);
      lat_rnd = lat_0 + x;
      lng_rnd = lng_0 + y;
      newReportModel.set('latitude',lat_rnd);
      newReportModel.set('longitude',lng_rnd);

      this.add(newReportModel);
    }

  },

});
