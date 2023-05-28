"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCustomValidationQıd = function () {
    var _a = (0, react_1.useState)(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)([]), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(false), isValid = _c[0], setIsValid = _c[1];
    var validateInput = function (value) {
        var validationErrors = [];
        if ((value === null || value === void 0 ? void 0 : value.length) !== 11) {
            validationErrors.push('QID must be 11 Digits');
        }
        if (!value.startsWith('2') && !value.startsWith('3')) {
            validationErrors.push('QID must start with either 2 or 3.');
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
exports.default = useCustomValidationQıd;
