"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var button_1 = __importDefault(require("../components/button"));
var registerHeadline_1 = __importDefault(require("../components/registerHeadline"));
var App = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(registerHeadline_1.default, { title: "Register with", subtitle: "Please select your registration page" }),
        react_1.default.createElement(react_native_1.View, { style: {
                display: "flex",
                flexDirection: "column",
                marginTop: 40,
                alignItems: "center",
            } },
            react_1.default.createElement(button_1.default, { style: { marginBottom: 20 }, buttonName: "Mobile Number", setOnPress: function () {
                    react_native_1.Platform.OS !== 'web' ? navigation.navigate('Step One') : window.location.href = '/registerStepOne';
                } }),
            react_1.default.createElement(button_1.default, { buttonName: "Landline Number", setOnPress: function () {
                    var url = "/registerStepOne?isLandline=".concat("true");
                    if (react_native_1.Platform.OS !== "web") {
                        navigation.navigate("Step One", {
                            isLandline: "true"
                        });
                    }
                    else {
                        window.location.href = url;
                    }
                } }))));
};
exports.default = App;
