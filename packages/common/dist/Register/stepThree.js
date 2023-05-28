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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    var _g = (0, react_1.useState)(false), isLoading = _g[0], setIsLoading = _g[1];
    var _h = (0, react_1.useState)(false), isError = _h[0], setIsError = _h[1];
    var _j = (0, react_1.useState)(""), successMessage = _j[0], setSuccessMessage = _j[1];
    var _k = (0, passwordValidation_1.default)(), inputValue = _k.inputValue, errors = _k.errors, setInputValue = _k.setInputValue, validateInput = _k.validateInput, isValid = _k.isValid;
    var _l = (0, qidValidation_1.default)(), inputValueQid = _l.inputValue, errorsQid = _l.errors, setInputValueQid = _l.setInputValue, validateInputQid = _l.validateInput, isValidQid = _l.isValid;
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
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("İstek atıldı");
                    setIsLoading(true);
                    setIsError(false);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    formData = {
                        serviceNumber: serviceNumberFinal,
                        qid: QidFinal,
                        email: Email,
                        password: Password
                    };
                    return [4 /*yield*/, fetch("http://localhost:8080/registerCustomer", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed");
                    }
                    url = "/accountCreated";
                    if (react_native_1.Platform.OS !== "web") {
                        navigation.navigate("Congratulations");
                    }
                    else {
                        window.location.href = url;
                    }
                    setSuccessMessage("Form submitted successfully!");
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    setIsError(true);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
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
                    handleSubmit();
                } }))));
};
exports.default = stepThree;
