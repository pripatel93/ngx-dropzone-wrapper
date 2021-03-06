"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// http://www.dropzonejs.com/#event-list
exports.DropzoneEvents = [
    'drop',
    'dragstart',
    'dragend',
    'dragenter',
    'dragover',
    'dragleave',
    'addedfile',
    'removedfile',
    'thumbnail',
    'error',
    'processing',
    'uploadprogress',
    'sending',
    'success',
    'complete',
    'canceled',
    'maxfilesreached',
    'maxfilesexceeded',
    'processingmultiple',
    'sendingmultiple',
    'successmultiple',
    'completemultiple',
    'canceledmultiple',
    'totaluploadprogress',
    'reset',
    'queuecomplete'
];
var DropzoneConfig = (function () {
    function DropzoneConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    DropzoneConfig.prototype.assign = function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[key] = config[key];
        }
    };
    return DropzoneConfig;
}());
exports.DropzoneConfig = DropzoneConfig;
//# sourceMappingURL=dropzone.interfaces.js.map