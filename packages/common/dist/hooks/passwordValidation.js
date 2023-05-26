"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCustomValidation = function () {
    var _a = (0, react_1.useState)(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)([]), errors = _b[0], setErrors = _b[1];
    var _c = (0, react_1.useState)(false), isValid = _c[0], setIsValid = _c[1];
    var validateInput = function (value) {
        var validationErrors = [];
        if (value.length < 8 || value.length > 20) {
            validationErrors.push('Girilen string 8 ile 20 karakter arasında olmalı.');
        }
        if (!/[A-Z]/.test(value)) {
            validationErrors.push('Girilen string bir büyük harf içermelidir.');
        }
        if (!/[a-z]/.test(value)) {
            validationErrors.push('Girilen string bir küçük harf içermelidir.');
        }
        if (!/[!@#.%$]/.test(value)) {
            validationErrors.push('Girilen string bir özel karakter içermelidir.');
        }
        if (/\s/.test(value)) {
            validationErrors.push('Girilen string boşluk içermemelidir.');
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
