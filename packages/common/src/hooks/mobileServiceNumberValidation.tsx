import { useState } from "react";

const useCustomValidationMSN = () => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const validateInput = (value: string) => {
    const validationErrors: string[] = [];

    if (value?.length !== 8) {
      validationErrors.push("Mobile number must be 8 digits exactly");
    }
    if (
      !value.startsWith("3") &&
      !value.startsWith("5") &&
      !value.startsWith("6") &&
      !value.startsWith("7")
    ) {
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

export default useCustomValidationMSN;
