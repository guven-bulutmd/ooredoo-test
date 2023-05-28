"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importStar(require("react"));
var registerHeadline_1 = __importDefault(require("../components/registerHeadline"));
var ooredooButton_1 = __importDefault(require("../components/ooredooButton"));
var login = function (props) {
    var navigation = props.navigation;
    var _a = (0, react_1.useState)(''), Email = _a[0], onChangEmail = _a[1];
    var _b = (0, react_1.useState)(''), Password = _b[0], onChangPassword = _b[1];
    var _c = (0, react_1.useState)(true), showPassword = _c[0], setShowPassword = _c[1];
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: 'flex', flexDirection: 'column' } },
        react_1.default.createElement(registerHeadline_1.default, { title: "Login to my ooredoo", subtitle: "Login with username and password" }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 40, marginBottom: 20 } },
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: onChangEmail, placeholder: "Email or username", value: Email }),
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, secureTextEntry: showPassword, onChangeText: onChangPassword, placeholder: "Password", value: Password }),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: { display: 'flex', alignItems: 'flex-end', width: 330 }, onPress: function () {
                    setShowPassword(!showPassword);
                } },
                react_1.default.createElement(react_native_1.Text, null, showPassword ? 'Show Password' : 'Hide Password')),
            react_1.default.createElement(react_native_1.View, { style: { padding: 20 } },
                react_1.default.createElement(ooredooButton_1.default, { ButtonName: "Login" })))));
};
exports.default = login;
