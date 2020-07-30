/*global location*/
sap.ui.define([
	"fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"fiori/model/formatter"
], function (
	BaseController,
	JSONModel,
	History,
	formatter
) {
	"use strict";

	return BaseController.extend("fiori.controller.DetailScreen", {

		formatter: formatter,

		onInit: function () {
			this.getRouter().getRoute("DetailScreen").attachPatternMatched(this._onObjectMatched, this);
		},
		
		handleNext:function()
		{
				this.getRouter().navTo("SubDetailScreen");
		},
		
		backtoMain:function()
		{
				this.getRouter().navTo("MainScreen");
		},

		_onObjectMatched: function (oEvent) {
			
		}

	});

});