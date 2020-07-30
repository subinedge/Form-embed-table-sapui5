sap.ui.define([
	"fiori/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"fiori/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("fiori.controller.MainScreen", {

		formatter: formatter,

		onInit: function () {
			//JSON Data binding for table
			var tabmodel = new JSONModel();
			//initializing the table with empty data set
			var otabdata = [];
			//declare a JSON Model for the table
			tabmodel.setData({
				tableAdd: otabdata
			});
			//set the model to the table
			this.getView().byId("table").setModel(tabmodel); //Note that we didn't use this.setModel directly
		},

		handleNext: function () {
			this.getRouter().navTo("DetailScreen");
		},

		handleFormSubmit: function () {
			var fName = this.byId("fname").getValue();
			var lName = this.byId("lname").getValue();
			var email = this.byId("email").getValue();
			var combo = this.byId("moduleConsultants").getValue();
			var doj = this.byId("datePick").getValue();

			var addData = {
				firstName: fName,
				lastName: lName,
				emailid: email,
				combobox: combo,
				doj: doj
			};

			var getTableID = this.getView().byId("table").getModel();
			var getTableProperty = getTableID.getProperty("/tableAdd");

			getTableProperty.push(addData);

			getTableID.setData({
				tableAdd: getTableProperty
			});

			this.byId("fname").setValue("");
			this.byId("lname").setValue("");
			this.byId("email").setValue("");
			this.byId("moduleConsultants").setValue("");
			this.byId("datePick").setValue("");
		}

	});
});