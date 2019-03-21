"use strict";
exports.__esModule = true;
var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Data;
}());
exports["default"] = Data;
