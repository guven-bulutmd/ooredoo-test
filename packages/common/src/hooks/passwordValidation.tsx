import { useState } from "react";

const useCustomValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const validateInput = (value: string) => {
    const validationErrors: string[] = [];

    if (value.length < 8 || value.length > 20) {
      validationErrors.push(
        "Be Between 8 and 20 characters."
      );
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

    if (validationErrors?.length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setErrors(validationErrors);
    setInputValue(value);
  };

  return {
    inputValue,
    errors,
    isValid,
    setInputValue,
    validateInput,
  };
};

export default useCustomValidation;
