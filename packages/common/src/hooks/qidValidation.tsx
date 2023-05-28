import {useState} from 'react';

const useCustomValidationQıd = () => {
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);
  const validateInput = (value: string) => {
    const validationErrors: string[] = [];

    if (value?.length !== 11) {
      validationErrors.push('QID must be 11 Digits');
    }
    if (!value.startsWith('2') && !value.startsWith('3')) {
      validationErrors.push('QID must start with either 2 or 3.');
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
