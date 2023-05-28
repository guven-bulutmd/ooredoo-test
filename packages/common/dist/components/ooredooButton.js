"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var ooredooButton = function (props) {
    var ButtonName = props.ButtonName, setOnPress = props.setOnPress, style = props.style, disabled = props.disabled;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: setOnPress, disabled: disabled, style: __assign({ backgroundColor: disabled ? "gray" : "#ED1C23", width: 300, height: 52, borderRadius: 80, display: "flex", alignItems: "center", justifyContent: "center" }, style) },
        react_1.default.createElement(react_native_1.Text, { style: {
                color: "#FDFDFD",
                fontSize: 20,
                fontWeight: "600",
                lineHeight: 32,
            } }, ButtonName)));
};
exports.default = ooredooButton;
