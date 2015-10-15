Handlebars.registerHelper('checkIfValidCategoryModel', function(categoryModel) {
  var out = false;

  if (categoryModel) {
    if (categoryModel.attributes){
      if (categoryModel.attributes.categoryID){
        if (categoryModel.attributes.categoryID == 'Z-1'){
          // not a "valid report ID"
          out = false
        } else{
          out = true;
        }

      }
    }
  }
  return out;
});
