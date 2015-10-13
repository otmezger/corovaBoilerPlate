(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Home view</h2>\r\n";
},"useData":true});
templates['menu'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"topcoat-list__container side-nav__list__container\">\r\n  <ul class=\"topcoat-list side-nav__list\">\r\n    <li class=\"topcoat-list__item side-nav__list__item is-active\" id='home'>\r\n      <a href=\"#/home\" class=\"side-nav__button\">Home</a>\r\n    </li>\r\n    <li class=\"topcoat-list__item side-nav__list__item\" id='whatever'>\r\n      <a href=\"#/whatever\" class=\"side-nav__button\">Whatever</a>\r\n    </li>\r\n    <li class=\"topcoat-list__item side-nav__list__item\" id='whatever'>\r\n      <a href=\"#/newReportMap\" class=\"side-nav__button\">photo</a>\r\n    </li>\r\n    <li class=\"topcoat-list__item side-nav__list__item\" id='whatever'>\r\n      <a class=\"emailContact side-nav__button\">Contacto</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";
},"useData":true});
templates['help'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['newReportMap'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['newReportCategory'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['newReportDetails'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-role=\"header\">\r\n        <!--<a id=\"photo-next-btn\" data-icon=\"arrow-r\" data-iconpos=\"right\" class=\"ui-btn-right\">Omitir foto</a>-->\r\n        <h1>Enviar reporte</h1>\r\n</div>\r\n<div data-role=\"content\">\r\n        <% var photoClass = 'nodisplay', nophotoClass = 'nodisplay';\r\n        if ( file != '' ) {\r\n            photoClass = '';\r\n        } else {\r\n            nophotoClass = '';\r\n        } %>\r\n    <div class=\"photo-wrapper\">\r\n    <div>\r\n		<div class=\"gmailstyletest\">\r\n			<div>\r\n				<label for=\"form_title\">Asunto</label>\r\n				<input data-role=\"none\" type=\"text\" name=\"title\" id=\"form_title\" placeholder=\"Titulo del reporte\" value=\"<%= title %>\" required>\r\n			</div>\r\n\r\n			<div>\r\n				<%= categories %>\r\n			</div>\r\n\r\n			<div class=\"noborder\">\r\n				<label for=\"form_detail\">Descripción</label>\r\n				<textarea data-role=\"none\" name=\"detail\" id=\"form_detail\" placeholder=\"Detalles del problema. Por favor sea lo más explicito posible.\" required><%= details %></textarea>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class=\"photo\">\r\n    <div id='photo-container'></div>\r\n	<div class=\"photo-btn\">\r\n		<input data-icon=\"fms-photo-existing\" type=\"button\" id=\"id_existing\" data-theme=\"c\" value=\"Seleccionar foto\" >\r\n		<input data-icon=\"fms-photo-new\" id=\"id_photo_button\" type=\"button\" data-theme=\"c\" value=\"Tomar foto\">\r\n    </div>\r\n	<a data-role=\"none\" id=\"id_del_photo_button\" class=\"photo-corner-button\">X</a>\r\n    </div>\r\n    <div class=\"send\">\r\n	<input id=\"id_send_report_button\" type=\"button\" data-theme=\"a\" value=\"Enviar reporte\">\r\n	</div>\r\n	</div>\r\n    <div class=\"bottom-btn\">\r\n\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['tutorial'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
})();