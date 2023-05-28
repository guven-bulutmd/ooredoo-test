/// <reference types="react" />
declare const useCustomValidationLN: () => {
    inputValue: string;
    errors: string[];
    isValid: boolean;
    setInputValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    validateInput: (value: string) => void;
};
export default useCustomValidationLN;
