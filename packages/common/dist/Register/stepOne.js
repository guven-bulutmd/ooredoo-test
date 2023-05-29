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
var landlineNumberValidation_1 = __importDefault(require("../hooks/landlineNumberValidation"));
var stepOne = function (props) {
    var _a;
    // This component is written according to mobile number and landline number parameters.
    var navigation = props.navigation, useRoute = props.useRoute;
    var isLandlineFinal;
    if (react_native_1.Platform.OS !== "web") {
        var route = useRoute();
        isLandlineFinal = (_a = route === null || route === void 0 ? void 0 : route.params) === null || _a === void 0 ? void 0 : _a.isLandline;
    }
    else {
        var params = new URLSearchParams(window.location.search);
        isLandlineFinal = params.get("isLandline");
    }
    var _b = react_1.default.useState(""), MobileNumber = _b[0], onChangeMobileNumber = _b[1];
    var _c = react_1.default.useState(""), LandlineNumber = _c[0], onChangeLandlineNumber = _c[1];
    var _d = react_1.default.useState(""), ID = _d[0], onChangID = _d[1];
    var _e = (0, qidValidation_1.default)(), inputValueQid = _e.inputValue, errorsQid = _e.errors, setInputValueQid = _e.setInputValue, validateInputQid = _e.validateInput, isValidQid = _e.isValid;
    var _f = (0, mobileServiceNumberValidation_1.default)(), inputValueMSN = _f.inputValue, errorsMSN = _f.errors, setInputValueMSN = _f.setInputValue, validateInputMSN = _f.validateInput, isValidMSN = _f.isValid;
    var _g = (0, landlineNumberValidation_1.default)(), inputValueLN = _g.inputValue, errorsLN = _g.errors, setInputValueLN = _g.setInputValue, validateInputLN = _g.validateInput, isValidLN = _g.isValid;
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
    var handleChangeLandline = function (e) {
        onChangeLandlineNumber(e);
        setInputValueLN(e);
        validateInputLN(e);
    };
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(registerHeadline_1.default, { title: "Welcome to Ooredoo \uD83D\uDC4B ", subtitle: "Please fill in your information below. Your ".concat(isLandlineFinal === "true" ? "landline number" : "mobile number", " should start with either 3, 5, 6 or 7.") }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 40 } },
            react_1.default.createElement(react_native_1.TextInput, { style: {
                    height: 50,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }, onChangeText: isLandlineFinal === "true" ? handleChangeLandline : handleChangeMSN, placeholder: isLandlineFinal === "true" ? "LandLine Number" : "Mobile Number", value: isLandlineFinal === "true" ? LandlineNumber : MobileNumber, keyboardType: "numeric" }),
            isLandlineFinal
                ? errorsLN === null || errorsLN === void 0 ? void 0 : errorsLN.map(function (item, index) {
                    return react_1.default.createElement(react_native_1.Text, { style: { color: "red" } }, item);
                })
                : errorsMSN === null || errorsMSN === void 0 ? void 0 : errorsMSN.map(function (item, index) {
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
            react_1.default.createElement(ooredooButton_1.default, { disabled: isLandlineFinal === 'true' ? !isValidQid || !isValidLN : !isValidQid || !isValidMSN, ButtonName: "Continue", setOnPress: function () {
                    var url = "/registerStepTwo?serviceNumber=".concat(isLandlineFinal === "true" ? LandlineNumber : MobileNumber, "&Qid=").concat(ID);
                    if (react_native_1.Platform.OS !== "web") {
                        navigation.navigate("Step Two", {
                            serviceNumber: isLandlineFinal === "true" ? LandlineNumber : MobileNumber,
                            Qid: ID,
                        });
                    }
                    else {
                        window.location.href = url;
                    }
                } }))));
};
exports.default = stepOne;
