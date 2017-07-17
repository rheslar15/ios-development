'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
    var Sqlite = require("nativescript-sqlite");
// additional requires

ViewModel = new Observable({

    backButtonHidden: true,

    pageTitle: 'Login',

    events: {
        loginViewModelSubmit: 'loginViewModelSubmit',
    },

    onloginViewModelFormSubmit: function() {
        this.notify({
            eventName: this.events.loginViewModelSubmit
        });
    },

    textUserName: '',

    textPassWord: '',

    // additional properties

});

// START_CUSTOM_CODE_loginView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginView
module.exports = ViewModel;