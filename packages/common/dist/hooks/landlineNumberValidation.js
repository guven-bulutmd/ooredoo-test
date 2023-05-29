"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCustomValidationLN = function () {
    var _a = (0, react_1.useState)(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)([]), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(false), isValid = _c[0], setIsValid = _c[1];
    var validateInput = function (value) {
        var validationErrors = [];
        if ((value === null || value === void 0 ? void 0 : value.length) !== 8) {
            validationErrors.push("Landline number must be 8 digits exactly");
        }
        if (!value.startsWith("4")) {
            validationErrors.push("Landline number needs to start with 4");
        }
        if ((validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.length) === 0) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
        setErrors(validationErrors);
        setInputValue(value);
    };
    return {
        inputValue: inputValue,
        errors: errors,
        isValid: isValid,
        setInputValue: setInputValue,
        validateInput: validateInput,
    };
};
exports.default = useCustomValidationLN;
