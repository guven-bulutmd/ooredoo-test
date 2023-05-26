import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, Pressable, Text } from "react-native";

interface OTPInputProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  maximumLength: number;
  setIsPinReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const OTPInput: React.FC<OTPInputProps> = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
}) => {
  const inputRef = useRef<TextInput>(null);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };
  const isValidNumber = (value: string) => /^[0-9]+$/.test(value);
  const handleOnChange = (value: any) => {
    if (isValidNumber(value)) {
      setCode(value);
    } else if (value === "") {
      setCode(value);
    }
  };
  useEffect(() => {
    setIsPinReady(code.length === maximumLength);
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const SplitBoxes = ({
    digit,
    isFocused,
  }: {
    digit: string;
    isFocused: boolean;
  }) => (
    <View
      style={{
        borderColor: isFocused ? "red" : "#e5e5e5",
        borderWidth: 2,
        borderRadius: 10,
        padding: 12,
        maxHeight: 50,
        minHeight: 50,
        minWidth: 50,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 20, textAlign: "center", color: "black" }}>
        {digit}
      </Text>
    </View>
  );

  const renderSplitBoxes = () => {
    const emptyInput = "";
    const digits = code.split("");
    const boxArray = new Array(maximumLength).fill(emptyInput);

    return boxArray.map((digit, index) => (
      <SplitBoxes
        key={index}
        digit={digits[index] || digit}
        isFocused={isInputBoxFocused && index === code.length}
      />
    ));
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onPress={handleOnPress}
        style={{
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {renderSplitBoxes()}
      </Pressable>
      <TextInput
        keyboardType="numeric"
        value={code}
        onChangeText={handleOnChange}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        style={{ position: "absolute", opacity: 0 }}
      />
    </View>
  );
};

export default OTPInput;
