"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAndroidStatusAddressToolBarHeight(androidOffsets) {
    var _a = window.screen, height = _a.height, width = _a.width;
    var innerHeight = window.innerHeight;
    var match = (navigator.appVersion).match(/Android (\d+).?(\d+)?.?(\d+)?/);
    var majorVersion = parseInt(match[1], 10);
    var versionOffsets = androidOffsets[majorVersion];
    var statusAddressBarHeight = versionOffsets.STATUS_BAR + versionOffsets.ADDRESS_BAR;
    var toolBarHeight = height - innerHeight - statusAddressBarHeight;
    return {
        statusAddressBar: {
            height: statusAddressBarHeight,
            width: width,
            x: 0,
            y: 0,
        },
        toolBar: {
            height: toolBarHeight,
            width: width,
            x: 0,
            y: height - toolBarHeight,
        },
    };
}
exports.default = getAndroidStatusAddressToolBarHeight;
//# sourceMappingURL=getAndroidStatusAddressToolBarHeight.js.map