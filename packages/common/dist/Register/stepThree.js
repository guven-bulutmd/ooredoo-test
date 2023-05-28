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
var ooredooButton_1 = __importDefault(require("../components/ooredooButton"));
var registerHeadline_1 = __importDefault(require("../components/registerHeadline"));
var passwordValidation_1 = __importDefault(require("../hooks/passwordValidation"));
var qidValidation_1 = __importDefault(require("../hooks/qidValidation"));
var stepThree = function (props) {
    var platform = props.platform, navigation = props.navigation;
    var _a = (0, react_1.useState)(""), MobileNumber = _a[0], onChangeMobileNumber = _a[1];
    var _b = (0, react_1.useState)(""), ID = _b[0], onChangID = _b[1];
    var _c = (0, react_1.useState)(""), Email = _c[0], onChangEmail = _c[1];
    var _d = (0, react_1.useState)(""), Password = _d[0], onChangPassword = _d[1];
    var _e = (0, react_1.useState)(true), showPassword = _e[0], setShowPassword = _e[1];
    var _f = (0, passwordValidation_1.default)(), inputValue = _f.inputValue, errors = _f.errors, setInputValue = _f.setInputValue, validateInput = _f.validateInput, isValid = _f.isValid;
    var _g = (0, qidValidation_1.default)(), inputValueQid = _g.inputValue, errorsQid = _g.errors, setInputValueQid = _g.setInputValue, validateInputQid = _g.validateInput, isValidQid = _g.isValid;
    var handleChangeQıd = function (e) {
        onChangID(e);
        setInputValueQid(e);
        validateInputQid(e);
    };
    var handleChange = function (e) {
        onChangPassword(e);
        setInputValue(e);
        validateInput(e);
    };
    console.log("şifre", errors, "validate", isValid);
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(registerHeadline_1.default, { title: "You're nearly there", subtitle: "Ahmad, we need some information before completing your registration." }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 40, marginBottom: 20 } },
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
                }, onChangeText: handleChangeQıd, placeholder: "Qatar ID or Passport ID", value: ID, keyboardType: "numeric" }), errorsQid === null || errorsQid === void 0 ? void 0 :
            errorsQid.map(function (item, index) {
                return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } }, item);
            }),
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: onChangEmail, placeholder: "Email Adress", value: Email }),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: { display: "flex", alignItems: "flex-end", width: 330 }, onPress: function () {
                    setShowPassword(!showPassword);
                } },
                react_1.default.createElement(react_native_1.Text, null, showPassword ? "Show Password" : "Hide Password")),
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, secureTextEntry: showPassword, onChangeText: handleChange, placeholder: "Password", value: Password })), errors === null || errors === void 0 ? void 0 :
        errors.map(function (item, index) {
            return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } }, item);
        }),
        react_1.default.createElement(react_native_1.View, { style: { padding: 20 } },
            react_1.default.createElement(ooredooButton_1.default, { ButtonName: "Continue", setOnPress: function () {
                    react_native_1.Platform.OS !== "web"
                        ? navigation.navigate("Congratulations")
                        : (window.location.href = "/accountCreated");
                } }))));
};
exports.default = stepThree;
