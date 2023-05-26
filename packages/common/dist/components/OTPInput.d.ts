import React from "react";
interface OTPInputProps {
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
    maximumLength: number;
    setIsPinReady: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const OTPInput: React.FC<OTPInputProps>;
export default OTPInput;
