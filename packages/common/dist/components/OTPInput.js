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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var OTPInput = function (_a) {
    var code = _a.code, setCode = _a.setCode, maximumLength = _a.maximumLength, setIsPinReady = _a.setIsPinReady;
    var inputRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), isInputBoxFocused = _b[0], setIsInputBoxFocused = _b[1];
    var handleOnPress = function () {
        var _a;
        setIsInputBoxFocused(true);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var handleOnBlur = function () {
        setIsInputBoxFocused(false);
    };
    var isValidNumber = function (value) { return /^[0-9]+$/.test(value); };
    var handleOnChange = function (value) {
        if (isValidNumber(value)) {
            setCode(value);
        }
        else if (value === "") {
            setCode(value);
        }
    };
    (0, react_1.useEffect)(function () {
        setIsPinReady(code.length === maximumLength);
        return function () {
            setIsPinReady(false);
        };
    }, [code]);
    var SplitBoxes = function (_a) {
        var digit = _a.digit, isFocused = _a.isFocused;
        return (react_1.default.createElement(react_native_1.View, { style: {
                borderColor: isFocused ? "red" : "#e5e5e5",
                borderWidth: 2,
                borderRadius: 10,
                padding: 12,
                maxHeight: 50,
                minHeight: 50,
                minWidth: 50,
                backgroundColor: "white",
            } },
            react_1.default.createElement(react_native_1.Text, { style: { fontSize: 20, textAlign: "center", color: "black" } }, digit)));
    };
    var renderSplitBoxes = function () {
        var emptyInput = "";
        var digits = code.split("");
        var boxArray = new Array(maximumLength).fill(emptyInput);
        return boxArray.map(function (digit, index) { return (react_1.default.createElement(SplitBoxes, { key: index, digit: digits[index] || digit, isFocused: isInputBoxFocused && index === code.length })); });
    };
    return (react_1.default.createElement(react_native_1.View, { style: { justifyContent: "center", alignItems: "center" } },
        react_1.default.createElement(react_native_1.Pressable, { onPress: handleOnPress, style: {
                width: "80%",
                flexDirection: "row",
                justifyContent: "space-evenly",
            } }, renderSplitBoxes()),
        react_1.default.createElement(react_native_1.TextInput, { keyboardType: "numeric", value: code, onChangeText: handleOnChange, maxLength: maximumLength, ref: inputRef, onBlur: handleOnBlur, style: { position: "absolute", opacity: 0 } })));
};
exports.default = OTPInput;
