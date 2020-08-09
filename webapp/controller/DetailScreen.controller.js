/*global location*/
sap.ui.define([
	"fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"fiori/model/formatter",
	"sap/m/MessageBox"
], function (
	BaseController,
	JSONModel,
	History,
	formatter,
	MessageBox
) {
	"use strict";

	return BaseController.extend("fiori.controller.DetailScreen", {

		formatter: formatter,

		onInit: function () {

			if (!this.oDialog) {
				this.oDialog = sap.ui.xmlfragment("fiori.fragments.DetailScreenButton", this);
			}

			this.getView().addDependent(this.oDialog);

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

			this.getRouter().getRoute("DetailScreen").attachPatternMatched(this._onObjectMatched, this);

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
			var firstNamePass = this.byId("firstNameDetail").getValue();
			var lastNamePass = this.byId("lastNameDetail").getValue();
			var emailIDPass = this.byId("emailIDDetail").getValue();
			

			this.getRouter().navTo("SubDetailScreen", {
				"firstName": firstNamePass,
				"lastName": lastNamePass,
				"emailID": emailIDPass
			});
		},

		backtoMain: function () {
			this.getRouter().navTo("MainScreen");
		},

		handleDialogOpen: function () {

			this.oDialog.open();
		},

		handleDialogClose: function () {

			this.oDialog.close();
		},

		handlei18nController: function () {
			var msgBox = this.getResourceBundle().getText("welcomeMessage");
			MessageBox.show(msgBox, {
				title: "Information",
				icon: MessageBox.Icon.INFORMATION
			});
		},

		_onObjectMatched: function (oEvent) {

		}

	});

});