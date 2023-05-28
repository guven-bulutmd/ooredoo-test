"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var button_1 = __importDefault(require("../components/button"));
var main = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: 'flex', flexDirection: 'column' } },
        react_1.default.createElement(react_native_1.Text, { style: { color: '#ED1C23', fontSize: 24, textAlign: 'center' } }, "ooredoo"),
        react_1.default.createElement(react_native_1.View, { style: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 40,
                alignItems: 'center',
            } },
            react_1.default.createElement(button_1.default, { style: { marginBottom: 20 }, buttonName: 'Login', setOnPress: function () {
                    react_native_1.Platform.OS !== 'web' ? navigation.navigate('Login') : window.location.href = '/login';
                } }),
            react_1.default.createElement(button_1.default, { buttonName: 'Signup', setOnPress: function () {
                    react_native_1.Platform.OS !== 'web' ? navigation.navigate('Register') : window.location.href = '/register';
                } }))));
};
exports.default = main;
