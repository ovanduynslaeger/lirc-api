///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

var api_lirc = require('./apis/api_lirc')

module.exports = function (app) {
    app.get('/lirc/device/:deviceId/command/:command/iterate/:iterate', api_lirc.deviceCommand);
    app.get('/lirc/device/:deviceId/command/:command', api_lirc.deviceOneCommand);
};