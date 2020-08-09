sap.ui.define([
	"fiori/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("fiori.controller.SubDetailScreen", {

		onInit: function () {
			this.getRouter().getRoute("SubDetailScreen").attachPatternMatched(this._onObjectMatched, this);
		},

		backtoMain: function () {
			this.getRouter().navTo("DetailScreen");
		},

		_onObjectMatched: function (oEvent) {
			var firstname = oEvent.getParameters().arguments.firstName;
			var lastname = oEvent.getParameters().arguments.lastName;
			var emailID = oEvent.getParameters().arguments.emailID;

			this.byId("SubDetailFirstName").setText(firstname);
			this.byId("SubDetailLastName").setText(lastname);
			this.byId("SubDetailEmail").setText(emailID);
		}

	});

});