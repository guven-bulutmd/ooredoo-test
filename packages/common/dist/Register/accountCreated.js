"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var registerHeadline_1 = __importDefault(require("../components/registerHeadline"));
var ooredooButton_1 = __importDefault(require("../components/ooredooButton"));
var accountCreated = function (props) {
    var navigation = props.navigation;
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(react_native_1.Text, { style: {
                fontSize: 40,
                fontWeight: "600",
                color: "#333",
                marginBottom: 40,
            } }, "Account Created"),
        react_1.default.createElement(registerHeadline_1.default, { title: "Congratulations, Ahmad", subtitle: "please check the e-mail send to Ah*****@gmail.com,to confirm your registration" }),
        react_1.default.createElement(react_native_1.View, { style: { padding: 20, marginTop: 20 } },
            react_1.default.createElement(ooredooButton_1.default, { ButtonName: "Login", setOnPress: function () {
                    react_native_1.Platform.OS !== "web"
                        ? navigation.navigate("Login")
                        : (window.location.href = "/login");
                } }))));
};
exports.default = accountCreated;
