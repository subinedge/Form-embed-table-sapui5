sap.ui.define([
	"fiori/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("fiori.controller.SubDetailScreen", {

   
		onInit: function () {
			this.getRouter().getRoute("SubDetailScreen").attachPatternMatched(this._onObjectMatched, this);
		},
		
		backtoMain: function() {
			this.getRouter().navTo("DetailScreen");	
		},

		_onObjectMatched: function (oEvent) {
			
		}
 
	});

});