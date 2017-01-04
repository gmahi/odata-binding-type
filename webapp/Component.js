sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";
	return UIComponent.extend(
		"sapui5.demo.odata.readingdata.bestpractice.Component", {
			metadata: {
				manifest: "json"
			},
			init: function() {
				// callthebasecomponent'sinitfunction
				UIComponent.prototype.init.apply(this, arguments);
				// createtheviewsbasedontheurl/hash
				this.getRouter().initialize();
			}
		});
});