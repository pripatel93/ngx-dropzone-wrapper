"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dropzone_directive_1 = require("./dropzone.directive");
var DropzoneComponent = (function () {
    function DropzoneComponent() {
        this.disabled = false;
        this.message = 'Click or drag files to upload';
        this.placeholder = '';
        this.useDropzoneClass = true;
        this.useDzWrapperClass = true;
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
    }
    DropzoneComponent.prototype.getPlaceholder = function () {
        return 'url(' + encodeURI(this.placeholder) + ')';
    };
    DropzoneComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dropzone',
                    exportAs: 'dropzone',
                    template: '<div [dropzone]="config" [disabled]="disabled" [useDropzoneClass]="useDropzoneClass" (drop)="DZ_DROP.emit($event)" (dragstart)="DZ_DRAGSTART.emit($event)" (dragend)="DZ_DRAGEND.emit($event)" (dragenter)="DZ_DRAGENTER.emit($event)" (dragover)="DZ_DRAGOVER.emit($event)" (dragleave)="DZ_DRAGLEAVE.emit($event)" (removedfile)="DZ_REMOVEDFILE.emit($event)" (thumbnail)="DZ_THUMBNAIL.emit($event)" (addedfile)="DZ_ADDEDFILE.emit($event)" (error)="DZ_ERROR.emit($event)" (processing)="DZ_PROCESSING.emit($event)" (uploadprogress)="DZ_UPLOADPROGRESS.emit($event)" (sending)="DZ_SENDING.emit($event)" (success)="DZ_SUCCESS.emit($event)" (complete)="DZ_COMPLETE.emit($event)" (canceled)="DZ_CANCELED.emit($event)" (maxfilesreached)="DZ_MAXFILESREACHED.emit($event)" (maxfilesexceeded)="DZ_MAXFILESEXCEEDED.emit($event)" (processingmultiple)="DZ_PROCESSINGMULTIPLE.emit($event)" (sendingmultiple)="DZ_SENDINGMULTIPLE.emit($event)" (successmultiple)="DZ_SUCCESSMULTIPLE.emit($event)" (completemultiple)="DZ_COMPLETEMULTIPLE.emit($event)" (canceledmultiple)="DZ_CANCELEDMULTIPLE.emit($event)" (totaluploadprogress)="DZ_TOTALUPLOADPROGRESS.emit($event)" (reset)="DZ_RESET.emit($event)" (queuecomplete)="DZ_QUEUECOMPLETE.emit($event)"><div class="dz-message" [class.disabled]="disabled" [class.dz-placeholder]="placeholder"><div class="dz-text" [innerHTML]="message || config?.dictDefaultMessage"></div><div *ngIf="placeholder" class="dz-image" [style.background-image]="getPlaceholder()"></div></div><ng-content></ng-content></div>',
                    styles: ['@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@-moz-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes pulse{0%,20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}}@-moz-keyframes pulse{0%,20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}}@keyframes pulse{0%,20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-preview.dz-file-preview .dz-details,.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;-ms-transition:opacity .2s linear;-o-transition:opacity .2s linear;transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:rgba(255,255,255,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:rgba(255,255,255,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05,1.05);-moz-transform:scale(1.05,1.05);-ms-transform:scale(1.05,1.05);-o-transform:scale(1.05,1.05);transform:scale(1.05,1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);-moz-animation:passing-through 3s cubic-bezier(.77,0,.175,1);-ms-animation:passing-through 3s cubic-bezier(.77,0,.175,1);-o-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);-moz-animation:slide-in 3s cubic-bezier(.77,0,.175,1);-ms-animation:slide-in 3s cubic-bezier(.77,0,.175,1);-o-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-ms-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;-webkit-transition:opacity .4s ease-in;-moz-transition:opacity .4s ease-in;-ms-transition:opacity .4s ease-in;-o-transition:opacity .4s ease-in;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;-moz-animation:pulse 6s ease infinite;-ms-animation:pulse 6s ease infinite;-o-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;-webkit-transition:width .3s ease-in-out;-moz-transition:width .3s ease-in-out;-ms-transition:width .3s ease-in-out;-o-transition:width .3s ease-in-out;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;-webkit-transition:opacity .3s ease;-moz-transition:opacity .3s ease;-ms-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\'\';position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}dropzone.dz-wrapper[fxflex],dropzone.dz-wrapper[fxflexfill],dropzone.dz-wrapper[fxlayout]{display:flex;flex-direction:inherit;-webkit-box-orient:inherit;-webkit-box-direction:inherit;align-item:inherit;place-content:inherit;-webkit-box-pack:inherit;-webkit-box-align:inherit}dropzone.dz-wrapper[fxflex]>.dropzone.dz-single,dropzone.dz-wrapper[fxflexfill]>.dropzone.dz-single,dropzone.dz-wrapper[fxlayout]>.dropzone.dz-single{display:flex;flex:1 1 auto;-ms-flex:1 1 auto;-webkit-box-flex:1;flex-direction:column;-webkit-box-orient:column;-webkit-box-direction:column;align-items:center;place-content:center;-webkit-box-pack:center;-webkit-box-align:center}dropzone.dz-wrapper[fxflex]>.dropzone.dz-multiple,dropzone.dz-wrapper[fxflexfill]>.dropzone.dz-multiple,dropzone.dz-wrapper[fxlayout]>.dropzone.dz-multiple{display:flex;flex-wrap:wrap;flex-direction:row;-webkit-box-orient:row;-webkit-box-direction:row;align-items:start;place-content:start;-webkit-box-pack:start;-webkit-box-align:start}dropzone.dz-wrapper>.dropzone{position:relative;overflow:auto;width:100%;min-height:0;padding:0;border:none;color:#666;background:0 0}dropzone.dz-wrapper>.dropzone .dz-message{position:relative;display:inline-block;overflow:auto;width:calc(100% - 16px);min-width:calc(100% - 16px);min-height:40px;max-width:calc(100% - 16px);max-height:100%;margin:8px;border:2px dashed #aaa;background:#eee}dropzone.dz-wrapper>.dropzone .dz-message .dz-text{padding:12px 24px;text-align:center}dropzone.dz-wrapper>.dropzone .dz-message .dz-image{width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:50% 50%}dropzone.dz-wrapper>.dropzone .dz-message.disabled{cursor:not-allowed}dropzone.dz-wrapper>.dropzone .dz-message.disabled .dz-text{opacity:.5}dropzone.dz-wrapper>.dropzone .dz-message.dz-placeholder{border-color:rgba(170,170,170,0)}dropzone.dz-wrapper>.dropzone .dz-message.dz-placeholder .dz-text{position:absolute;z-index:1;top:0;right:10%;left:10%;opacity:0;font-weight:700;background:rgba(255,255,255,.5);transform:translateY(-50%);transition:filter 250ms ease-in-out,opacity 250ms ease-in-out,border-color 250ms ease-in-out}dropzone.dz-wrapper>.dropzone .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone.dz-wrapper>.dropzone .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone.dz-wrapper>.dropzone .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{-webkit-filter:blur(8px);filter:blur(8px)}dropzone.dz-wrapper>.dropzone .dz-preview .dz-details{padding:24px}dropzone.dz-wrapper>.dropzone .dz-preview .dz-progress{width:80%;margin-left:-40%;border:1px solid #aaa;border-radius:4px}dropzone.dz-wrapper>.dropzone .dz-preview .dz-progress .dz-upload{background:#666}dropzone.dz-wrapper>.dropzone .dz-preview .dz-filename span{display:block;overflow:hidden;width:100%;max-width:100%;text-overflow:ellipsis}dropzone.dz-wrapper>.dropzone .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone.dz-wrapper>.dropzone.dz-single.dz-started .dz-message{display:none}dropzone.dz-wrapper>.dropzone.dz-single .dz-message{width:100%;height:100%}dropzone.dz-wrapper>.dropzone.dz-single .dz-message .dz-text{margin-top:50%;transform:translateY(-50%)}dropzone.dz-wrapper>.dropzone.dz-single .dz-preview{width:calc(100% - 16px);height:100%;margin:8px}dropzone.dz-wrapper>.dropzone.dz-single .dz-preview .dz-image{width:100%;height:100%;border-radius:0}dropzone.dz-wrapper>.dropzone.dz-single .dz-preview .dz-image img{display:block;width:100%;height:auto;margin:0}dropzone.dz-wrapper>.dropzone.dz-single .dz-error-message{top:50%;left:50%;transform:translateX(-50%) translateY(100%)}dropzone.dz-wrapper>.dropzone.dz-multiple.dz-started .dz-message{display:inline-block}'],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    DropzoneComponent.ctorParameters = function () { return []; };
    DropzoneComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'message': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'useDropzoneClass': [{ type: core_1.Input },],
        'useDzWrapperClass': [{ type: core_1.HostBinding, args: ['class.dz-wrapper',] }, { type: core_1.Input },],
        'directiveRef': [{ type: core_1.ViewChild, args: [dropzone_directive_1.DropzoneDirective,] },],
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
    return DropzoneComponent;
}());
exports.DropzoneComponent = DropzoneComponent;
//# sourceMappingURL=dropzone.component.js.map