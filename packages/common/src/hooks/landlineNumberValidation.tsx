import { useState } from "react";

const useCustomValidationLN = () => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const validateInput = (value: string) => {
    const validationErrors: string[] = [];

    if (value?.length !== 8) {
      validationErrors.push("Mobile number must be 8 digits exactly");
    }
    if (!value.startsWith("4")) {
      validationErrors.push("Mobile number needs to start with 3,5,6 or 7");
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

export default useCustomValidationLN;
