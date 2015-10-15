var ReportCategoryModel = Backbone.Model.extend({
  defaults: {
    "categoryColor":  "#FF0000",
    "categoryID":     "Z-1",
    "categoryIcon":    "ion-ios-help",
    "categoryName": "Otras",
    'validID': true,
  }
});




var ReportCategoryCollection = Backbone.Collection.extend({
  model: ReportCategoryModel,
  populateManual:function(){
    //this function adds all manual models to the collection. in a perfect world, this will be generated via a fetch from the server
    var newCategoryModel = new ReportCategoryModel();
    newCategoryModel.set('categoryColor','#F0B92D');
    newCategoryModel.set('categoryID','A-1');
    newCategoryModel.set('categoryIcon','ion-android-radio-button-on');
    newCategoryModel.set('categoryName','Hueco en la vía');
    this.add(newCategoryModel);

    var newCategoryModel = new ReportCategoryModel();
    newCategoryModel.set('categoryColor','#F26077');
    newCategoryModel.set('categoryID','B-3');
    newCategoryModel.set('categoryIcon','ion-ios-minus');
    newCategoryModel.set('categoryName','Acera bloqueada');
    this.add(newCategoryModel);

    var newCategoryModel = new ReportCategoryModel();
    newCategoryModel.set('categoryColor','#198EC2');
    newCategoryModel.set('categoryID','D-1');
    newCategoryModel.set('categoryIcon','ion-waterdrop');
    newCategoryModel.set('categoryName','Daño de Agua');
    this.add(newCategoryModel);

    var newCategoryModel = new ReportCategoryModel();
    newCategoryModel.set('categoryColor','#68BC36');
    newCategoryModel.set('categoryID','I-1');
    newCategoryModel.set('categoryIcon','ion-leaf');
    newCategoryModel.set('categoryName','Lotes Vacios');
    this.add(newCategoryModel);

    var newCategoryModel = new ReportCategoryModel();
    newCategoryModel.set('categoryColor','#9662D0');
    newCategoryModel.set('categoryID','F-0');
    newCategoryModel.set('categoryIcon','ion-ios-trash');
    newCategoryModel.set('categoryName','Basura');
    this.add(newCategoryModel);

    var newCategoryModel = new ReportCategoryModel();
    newCategoryModel.set('categoryColor','#A5A5A5');
    newCategoryModel.set('categoryID','Z-1');
    newCategoryModel.set('categoryIcon','ion-ios-help');
    newCategoryModel.set('categoryName','Otra');
    newCategoryModel.set('validID',false);

    this.add(newCategoryModel);
  },
  getReportCategoryByCategoryID: function(categoryID){
    var returnModel = null;
    _.each(this.models,function(thisModel){
      if (thisModel.attributes.categoryID == categoryID){
        returnModel = thisModel;
      }
    });
    return returnModel;
  }

});
