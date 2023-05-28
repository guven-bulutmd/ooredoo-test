"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var registerHeadline_1 = __importDefault(require("../components/registerHeadline"));
var ooredooButton_1 = __importDefault(require("../components/ooredooButton"));
var qidValidation_1 = __importDefault(require("../hooks/qidValidation"));
var mobileServiceNumberValidation_1 = __importDefault(require("../hooks/mobileServiceNumberValidation"));
var stepOne = function (props) {
    var navigation = props.navigation;
    var _a = react_1.default.useState(""), MobileNumber = _a[0], onChangeMobileNumber = _a[1];
    var _b = react_1.default.useState(""), ID = _b[0], onChangID = _b[1];
    var _c = (0, qidValidation_1.default)(), inputValueQid = _c.inputValue, errorsQid = _c.errors, setInputValueQid = _c.setInputValue, validateInputQid = _c.validateInput, isValidQid = _c.isValid;
    var _d = (0, mobileServiceNumberValidation_1.default)(), inputValueMSN = _d.inputValue, errorsMSN = _d.errors, setInputValueMSN = _d.setInputValue, validateInputMSN = _d.validateInput, isValidMSN = _d.isValid;
    var handleChangeQıd = function (e) {
        onChangID(e);
        setInputValueQid(e);
        validateInputQid(e);
    };
    var handleChangeMSN = function (e) {
        onChangeMobileNumber(e);
        setInputValueMSN(e);
        validateInputMSN(e);
    };
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(registerHeadline_1.default, { title: "Welcome to Ooredoo \uD83D\uDC4B ", subtitle: "Please fill in your information below. Your mobile number should start with either 3, 5, 6 or 7." }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 40 } },
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: handleChangeMSN, placeholder: "Mobile Number", value: MobileNumber, keyboardType: "numeric" }), errorsMSN === null || errorsMSN === void 0 ? void 0 :
            errorsMSN.map(function (item, index) {
                return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } }, item);
            }),
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: handleChangeQıd, placeholder: "Qatar ID or Passport ID", value: ID, keyboardType: "numeric" }), errorsQid === null || errorsQid === void 0 ? void 0 :
            errorsQid.map(function (item, index) {
                return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } }, item);
            })),
        react_1.default.createElement(react_native_1.View, { style: { padding: 20 } },
            react_1.default.createElement(ooredooButton_1.default, { disabled: !isValidQid || !isValidMSN, ButtonName: "Continue", setOnPress: function () {
                    var url = "/registerStepTwo?serviceNumber=".concat(MobileNumber, "&Qid=").concat(ID);
                    if (react_native_1.Platform.OS !== "web") {
                        navigation.navigate("Step Two", {
                            serviceNumber: MobileNumber,
                            Qid: ID,
                        });
                    }
                    else {
                        window.location.href = url;
                    }
                } }))));
};
exports.default = stepOne;
