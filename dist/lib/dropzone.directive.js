"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dropzone = require("dropzone");
var core_1 = require("@angular/core");
var dropzone_interfaces_1 = require("./dropzone.interfaces");
var DropzoneDirective = (function () {
    function DropzoneDirective(zone, renderer, elementRef, differs, defaults) {
        this.zone = zone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.disabled = false;
        this.useDropzoneClass = true;
        this.DZ_DROP = new core_1.EventEmitter();
        this.DZ_DRAGSTART = new core_1.EventEmitter();
        this.DZ_DRAGEND = new core_1.EventEmitter();
        this.DZ_DRAGENTER = new core_1.EventEmitter();
        this.DZ_DRAGOVER = new core_1.EventEmitter();
        this.DZ_DRAGLEAVE = new core_1.EventEmitter();
        this.DZ_ADDEDFILE = new core_1.EventEmitter();
        this.DZ_REMOVEDFILE = new core_1.EventEmitter();
        this.DZ_THUMBNAIL = new core_1.EventEmitter();
        this.DZ_ERROR = new core_1.EventEmitter();
        this.DZ_PROCESSING = new core_1.EventEmitter();
        this.DZ_UPLOADPROGRESS = new core_1.EventEmitter();
        this.DZ_SENDING = new core_1.EventEmitter();
        this.DZ_SUCCESS = new core_1.EventEmitter();
        this.DZ_COMPLETE = new core_1.EventEmitter();
        this.DZ_CANCELED = new core_1.EventEmitter();
        this.DZ_MAXFILESREACHED = new core_1.EventEmitter();
        this.DZ_MAXFILESEXCEEDED = new core_1.EventEmitter();
        this.DZ_PROCESSINGMULTIPLE = new core_1.EventEmitter();
        this.DZ_SENDINGMULTIPLE = new core_1.EventEmitter();
        this.DZ_SUCCESSMULTIPLE = new core_1.EventEmitter();
        this.DZ_COMPLETEMULTIPLE = new core_1.EventEmitter();
        this.DZ_CANCELEDMULTIPLE = new core_1.EventEmitter();
        this.DZ_TOTALUPLOADPROGRESS = new core_1.EventEmitter();
        this.DZ_RESET = new core_1.EventEmitter();
        this.DZ_QUEUECOMPLETE = new core_1.EventEmitter();
        eval('Dropzone.autoDiscover = false');
    }
    DropzoneDirective.prototype.ngOnInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        var options = new dropzone_interfaces_1.DropzoneConfig(this.defaults);
        options.assign(this.config); // Custom config
        this.renderer.setElementClass(this.elementRef.nativeElement, 'dropzone', this.useDropzoneClass);
        this.renderer.setElementClass(this.elementRef.nativeElement, 'dz-single', (options.maxFiles === 1));
        this.renderer.setElementClass(this.elementRef.nativeElement, 'dz-multiple', (options.maxFiles !== 1));
        this.zone.runOutsideAngular(function () {
            _this.dropzone = new Dropzone(element, options);
        });
        // Add auto reset handling for events
        this.dropzone.on('success', function (result) {
            if (options.autoReset != null) {
                setTimeout(function () { return _this.reset(); }, options.autoReset);
            }
        });
        this.dropzone.on('error', function (error) {
            if (options.errorReset != null) {
                setTimeout(function () { return _this.reset(); }, options.errorReset);
            }
        });
        this.dropzone.on('canceled', function (result) {
            if (options.cancelReset != null) {
                setTimeout(function () { return _this.reset(); }, options.cancelReset);
            }
        });
        // Add native dropzone event handling
        dropzone_interfaces_1.DropzoneEvents.forEach(function (eventName) {
            _this.dropzone.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length === 1) {
                    args = args[0];
                }
                if (_this["DZ_" + eventName.toUpperCase()]) {
                    _this.zone.run(function () {
                        _this["DZ_" + eventName.toUpperCase()].emit(args);
                    });
                }
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create(null);
        }
    };
    DropzoneDirective.prototype.ngDoCheck = function () {
        if (!this.disabled && this.configDiff) {
            var changes = this.configDiff.diff(this.config || {});
            if (changes && this.dropzone) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    };
    DropzoneDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.dropzone.destroy();
        });
    };
    DropzoneDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.dropzone && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(function () {
                        _this.dropzone.enable();
                    });
                }
                else if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(function () {
                        _this.dropzone.disable();
                    });
                }
            }
        }
    };
    DropzoneDirective.prototype.reset = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.dropzone.removeAllFiles();
        });
    };
    DropzoneDirective.prototype.processQueue = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.dropzone.processQueue();
        });
    };
    DropzoneDirective.prototype.processFile = function (file) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.dropzone.processFile(file);
        });
    };
    DropzoneDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dropzone]'
                },] },
    ];
    /** @nocollapse */
    DropzoneDirective.ctorParameters = function () { return [
        { type: core_1.NgZone, },
        { type: core_1.Renderer, },
        { type: core_1.ElementRef, },
        { type: core_1.KeyValueDiffers, },
        { type: dropzone_interfaces_1.DropzoneConfig, decorators: [{ type: core_1.Optional },] },
    ]; };
    DropzoneDirective.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input, args: ['dropzone',] },],
        'useDropzoneClass': [{ type: core_1.Input, args: ['useDropzoneClass',] },],
        'DZ_DROP': [{ type: core_1.Output, args: ['drop',] },],
        'DZ_DRAGSTART': [{ type: core_1.Output, args: ['dragstart',] },],
        'DZ_DRAGEND': [{ type: core_1.Output, args: ['dragend',] },],
        'DZ_DRAGENTER': [{ type: core_1.Output, args: ['dragenter',] },],
        'DZ_DRAGOVER': [{ type: core_1.Output, args: ['dragover',] },],
        'DZ_DRAGLEAVE': [{ type: core_1.Output, args: ['dragleave',] },],
        'DZ_ADDEDFILE': [{ type: core_1.Output, args: ['addedfile',] },],
        'DZ_REMOVEDFILE': [{ type: core_1.Output, args: ['removedfile',] },],
        'DZ_THUMBNAIL': [{ type: core_1.Output, args: ['thumbnail',] },],
        'DZ_ERROR': [{ type: core_1.Output, args: ['error',] },],
        'DZ_PROCESSING': [{ type: core_1.Output, args: ['processing',] },],
        'DZ_UPLOADPROGRESS': [{ type: core_1.Output, args: ['uploadprogress',] },],
        'DZ_SENDING': [{ type: core_1.Output, args: ['sending',] },],
        'DZ_SUCCESS': [{ type: core_1.Output, args: ['success',] },],
        'DZ_COMPLETE': [{ type: core_1.Output, args: ['complete',] },],
        'DZ_CANCELED': [{ type: core_1.Output, args: ['canceled',] },],
        'DZ_MAXFILESREACHED': [{ type: core_1.Output, args: ['maxfilesreached',] },],
        'DZ_MAXFILESEXCEEDED': [{ type: core_1.Output, args: ['maxfilesexceeded',] },],
        'DZ_PROCESSINGMULTIPLE': [{ type: core_1.Output, args: ['processingmultiple',] },],
        'DZ_SENDINGMULTIPLE': [{ type: core_1.Output, args: ['sendingmultiple',] },],
        'DZ_SUCCESSMULTIPLE': [{ type: core_1.Output, args: ['successmultiple',] },],
        'DZ_COMPLETEMULTIPLE': [{ type: core_1.Output, args: ['completemultiple',] },],
        'DZ_CANCELEDMULTIPLE': [{ type: core_1.Output, args: ['canceledmultiple',] },],
        'DZ_TOTALUPLOADPROGRESS': [{ type: core_1.Output, args: ['totaluploadprogress',] },],
        'DZ_RESET': [{ type: core_1.Output, args: ['reset',] },],
        'DZ_QUEUECOMPLETE': [{ type: core_1.Output, args: ['queuecomplete',] },],
    };
    return DropzoneDirective;
}());
exports.DropzoneDirective = DropzoneDirective;
//# sourceMappingURL=dropzone.directive.js.map