"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (typeof document !== 'undefined') {
                document.addEventListener('click', function () {
                    _this.offClickHandler(-1);
                });
                var spans = document.getElementsByClassName('ui-select-toggle');
                var _loop_1 = function (i) {
                    spans[i].removeEventListener('click', _this.offClickHandler);
                    var id = spans[i].id;
                    spans[i].addEventListener('click', function () {
                        _this.offClickHandler(id);
                    });
                };
                for (var i = 0; i < spans.length; i++) {
                    _loop_1(i);
                }
            }
        }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
            var spans = document.getElementsByClassName('ui-select-toggle');
            for (var i = 0; i < spans.length; i++) {
                spans[i].removeEventListener('click', this.offClickHandler);
            }
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;
