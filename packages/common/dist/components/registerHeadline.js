"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var registerHeadline = function (props) {
    var title = props.title, subtitle = props.subtitle;
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, { style: { fontSize: 40, fontWeight: "600", color: "#333" } }, title),
        react_1.default.createElement(react_native_1.Text, { style: {
                fontSize: 13,
                fontWeight: "400",
                color: "#333",
                marginTop: 24,
            } }, subtitle)));
};
exports.default = registerHeadline;
