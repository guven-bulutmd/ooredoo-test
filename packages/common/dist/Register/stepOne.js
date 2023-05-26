"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var registerHeadline_1 = __importDefault(require("../components/registerHeadline"));
var ooredooButton_1 = __importDefault(require("../components/ooredooButton"));
var stepOne = function (props) {
    var _a = react_1.default.useState(""), MobileNumber = _a[0], onChangeMobileNumber = _a[1];
    var _b = react_1.default.useState(""), ID = _b[0], onChangID = _b[1];
    var platform = props.platform, navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(registerHeadline_1.default, { title: "Welcome to Ooredoo \uD83D\uDC4B ", subtitle: "Please fill in your information below. Your mobile number should start with either 3, 5, 6 or 7." }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 40 } },
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: onChangeMobileNumber, placeholder: "Mobile Number", value: MobileNumber, keyboardType: "numeric" }),
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: onChangID, placeholder: "Qatar ID or Passport ID", value: ID, keyboardType: "numeric" })),
        react_1.default.createElement(react_native_1.View, { style: { padding: 20 } },
            react_1.default.createElement(ooredooButton_1.default, { ButtonName: "Continue", setOnPress: function () {
                    platform === 'mobile' ? navigation.navigate('Step Two') : window.location.href = '/registerStepTwo';
                } }))));
};
exports.default = stepOne;
