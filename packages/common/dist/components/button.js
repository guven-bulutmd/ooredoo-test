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
var button = function (props) {
    var buttonName = props.buttonName, setOnPress = props.setOnPress, style = props.style;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: setOnPress, style: __assign({ display: "flex", alignItems: "center", justifyContent: "center", borderColor: "black", borderRadius: 8, borderWidth: 1, width: 300, height: 50 }, style) },
        react_1.default.createElement(react_native_1.Text, { style: { fontSize: 20, fontWeight: "400", color: "#333" } }, buttonName)));
};
exports.default = button;
