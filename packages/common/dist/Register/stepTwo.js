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
var OTPInput_1 = __importDefault(require("../components/OTPInput"));
var stepTwo = function (props) {
    var platform = props.platform, navigation = props.navigation;
    var _a = (0, react_1.useState)(""), otpCode = _a[0], setOTPCode = _a[1];
    var _b = (0, react_1.useState)(false), isPinReady = _b[0], setIsPinReady = _b[1];
    var maximumCodeLength = 4;
    if (isPinReady) {
        console.log('pin hazır', isPinReady);
    }
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 24, display: "flex", flexDirection: "column" } },
        react_1.default.createElement(registerHeadline_1.default, { title: "Enter 4-digit code", subtitle: "Let's confirm your identity. Enter the verification code sent to your mobile number ****921" }),
        react_1.default.createElement(react_native_1.View, { style: { marginTop: 40, marginBottom: 20 } },
            react_1.default.createElement(OTPInput_1.default, { code: otpCode, setCode: setOTPCode, maximumLength: maximumCodeLength, setIsPinReady: setIsPinReady })),
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                platform === "mobile"
                    ? navigation.navigate("Step Three")
                    : (window.location.href = "/registerStepThree");
            } },
            react_1.default.createElement(react_native_1.Text, { style: { color: "#ED1C23", textDecorationLine: "underline" } }, "Resend code"))));
};
exports.default = stepTwo;
