Handlebars.registerHelper('getMiniaturePictureClass', function(pictureModel) {
  var out;

  if (pictureModel) {
    out = 'tmpPhoto';
  }else{
    out = 'newPhoto';
  }
  return out;
});
