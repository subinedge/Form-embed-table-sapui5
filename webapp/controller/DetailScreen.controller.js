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

			// Steps on integrating JSON model to table:
			// 			1. Import and Intialize JSON model in controller
			// 			2. Fetch the table from view using ID
			// 			3. Create custom JSON data
			// 			4. set the custom JSON data to model
			// 			5. Bind the JSON model to table
			// 			5. Specify the JSON model name in table
			// 			6. Create items aggregation in view 

			// 1. Import and Intialize JSON model in controller
			var json = new JSONModel();

			// 2. Fetch the table from view using ID
			var otable = this.byId("oTab");

			// 3. Create custom JSON data
			var JSONData = [{
				"firstName": "Subin",
				"lastName": "Sudhakaran",
				"emailID": "aa@gmail.com"
			}, {
				"firstName": "Sudheesh",
				"lastName": "Sudhakaran",
				"emailID": "bb@gmail.com"
			}, {
				"firstName": "Bindhu",
				"lastName": "Sudhakaran",
				"emailID": "cc@gmail.com"
			}, {
				"firstName": "Sudhakaran",
				"lastName": "Mallaath",
				"emailID": "dd@gmail.com"
			}];

			// 4. set the custom JSON data to model
			json.setData({
				'JSONDataName': JSONData
			});

			// 5. Bind the JSON model to table
			otable.setModel(json);

		},

		handleColumnPress: function (event) {
			var firstNameCellValue = event.getSource().getCells()[0].getText();
			var lastNameCellValue = event.getSource().getCells()[1].getText();
			var emailIDCellValue = event.getSource().getCells()[2].getText();

			this.byId("firstNameDetail").setValue(firstNameCellValue);
			this.byId("lastNameDetail").setValue(lastNameCellValue);
			this.byId("emailIDDetail").setValue(emailIDCellValue);
		},

		handleNext: function () {
			this.getRouter().navTo("SubDetailScreen");
		},

		backtoMain: function () {
			this.getRouter().navTo("MainScreen");
		},

		_onObjectMatched: function (oEvent) {

		}

	});

});