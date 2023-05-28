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
    var platform = props.platform, navigation = props.navigation, useRoute = props.useRoute;
    var serviceNumberFinal, QidFinal;
    if (react_native_1.Platform.OS !== "web") {
        var route = useRoute();
        var _a = route.params, serviceNumber = _a.serviceNumber, Qid = _a.Qid;
        serviceNumberFinal = serviceNumber;
        QidFinal = Qid;
    }
    else {
        var params = new URLSearchParams(window.location.search);
        serviceNumberFinal = params.get("serviceNumber");
        QidFinal = params.get("Qid");
    }
    var _b = (0, react_1.useState)(serviceNumberFinal ? serviceNumberFinal : ""), MobileNumber = _b[0], onChangeMobileNumber = _b[1];
    var _c = (0, react_1.useState)(QidFinal ? QidFinal : ""), ID = _c[0], onChangID = _c[1];
    var _d = (0, react_1.useState)(""), Email = _d[0], onChangEmail = _d[1];
    var _e = (0, react_1.useState)(""), Password = _e[0], onChangPassword = _e[1];
    var _f = (0, react_1.useState)(true), showPassword = _f[0], setShowPassword = _f[1];
    var _g = (0, passwordValidation_1.default)(), inputValue = _g.inputValue, errors = _g.errors, setInputValue = _g.setInputValue, validateInput = _g.validateInput, isValid = _g.isValid;
    var _h = (0, qidValidation_1.default)(), inputValueQid = _h.inputValue, errorsQid = _h.errors, setInputValueQid = _h.setInputValue, validateInputQid = _h.validateInput, isValidQid = _h.isValid;
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
                    backgroundColor: '#F0F0F0',
                    color: '#6D6D6D'
                }, editable: false, selectTextOnFocus: false, onChangeText: onChangeMobileNumber, placeholder: "Mobile Number", value: MobileNumber, keyboardType: "numeric" }),
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: '#F0F0F0',
                    color: '#6D6D6D'
                }, editable: false, selectTextOnFocus: false, onChangeText: handleChangeQıd, placeholder: "Qatar ID or Passport ID", value: ID, keyboardType: "numeric" }), errorsQid === null || errorsQid === void 0 ? void 0 :
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
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, secureTextEntry: showPassword, onChangeText: handleChange, placeholder: "Password", value: Password }),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: { display: "flex", alignItems: "flex-end", width: 330 }, onPress: function () {
                    setShowPassword(!showPassword);
                } },
                react_1.default.createElement(react_native_1.Text, null, showPassword ? "Show Password" : "Hide Password"))), errors === null || errors === void 0 ? void 0 :
        errors.map(function (item, index) {
            return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } }, item);
        }),
        react_1.default.createElement(react_native_1.View, { style: { padding: 20 } },
            react_1.default.createElement(ooredooButton_1.default, { disabled: !isValid, ButtonName: "Continue", setOnPress: function () {
                    react_native_1.Platform.OS !== "web"
                        ? navigation.navigate("Congratulations")
                        : (window.location.href = "/accountCreated");
                } }))));
};
exports.default = stepThree;
