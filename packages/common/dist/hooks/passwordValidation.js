"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCustomValidation = function () {
    var _a = (0, react_1.useState)(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)([]), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(false), isValid = _c[0], setIsValid = _c[1];
    var validateInput = function (value) {
        var validationErrors = [];
        if (value.length < 8 || value.length > 20) {
            validationErrors.push("Be Between 8 and 20 characters.");
        }
        if (!/[A-Z]/.test(value)) {
            validationErrors.push("Include at least one upper case letter");
        }
        if (!/\d+/.test(value)) {
            validationErrors.push("Include at least one number");
        }
        if (!/[a-z]/.test(value)) {
            validationErrors.push("Include at least one lower case letter.");
        }
        if (!/[!@#.%$]/.test(value)) {
            validationErrors.push("Include at least one special character(!@#.%$)");
        }
        if (/\s/.test(value)) {
            validationErrors.push("Doesn't include whitespace");
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
exports.default = useCustomValidation;
