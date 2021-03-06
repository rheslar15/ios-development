'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    gestures = require('ui/gestures'),
    dataService = require('../../dataProviders/backendServices'),

    // additional requires

    viewModel = require('./loginView-view-model');

function onRequestSuccess() {

}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

function saveData() {
    var data = dataService.data('User');

    data.save({

            UserName: viewModel.get('txtUserName'),

            PassWord: viewModel.get('txtPassword'),

            UserName: viewModel.get('textAreaField'),

            // save properties

        })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
}

function onloginViewModelFormSubmit() {
    saveData();
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    page.addCss("loginView.component.css");
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.loginViewModelSubmit, onloginViewModelFormSubmit);

        // additional pageInit

    }
}

// START_CUSTOM_CODE_loginView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginView
exports.pageLoaded = pageLoaded;