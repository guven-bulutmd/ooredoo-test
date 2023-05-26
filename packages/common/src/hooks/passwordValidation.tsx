import { useState } from "react";

const useCustomValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const validateInput = (value: string) => {
    const validationErrors: string[] = [];

    if (value.length < 8 || value.length > 20) {
      validationErrors.push(
        "Girilen string 8 ile 20 karakter arasında olmalı."
      );
    }

    if (!/[A-Z]/.test(value)) {
      validationErrors.push("Girilen string bir büyük harf içermelidir.");
    }

    if (!/[a-z]/.test(value)) {
      validationErrors.push("Girilen string bir küçük harf içermelidir.");
    }

    if (!/[!@#.%$]/.test(value)) {
      validationErrors.push("Girilen string bir özel karakter içermelidir.");
    }

    if (/\s/.test(value)) {
      validationErrors.push("Girilen string boşluk içermemelidir.");
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
