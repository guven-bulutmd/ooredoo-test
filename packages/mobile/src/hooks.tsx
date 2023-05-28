import {useState} from 'react';

const useCustomValidationQıd = () => {
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const validateInput = (value: string) => {
    const validationErrors: string[] = [];

    if (value?.length !== 11) {
      validationErrors.push('Girilen değer 11 karakter olmalıdır.');
    }
    if (!value.startsWith('2') && !value.startsWith('3')) {
      validationErrors.push('Girilen değer 2 ya da 3 ile başlamalı.');
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

export default useCustomValidationQıd;
