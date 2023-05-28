import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  ButtonName: string;
  setOnPress?: any;
  style?: any;
  disabled?:boolean;
};

const ooredooButton = (props: Props) => {
  const { ButtonName, setOnPress, style, disabled } = props;
  return (
    <TouchableOpacity
      onPress={setOnPress}
      disabled={disabled}
      style={{
        backgroundColor:disabled?"gray": "#ED1C23",
        width: 300,
        height: 52,
        borderRadius: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Text
        style={{
          color: "#FDFDFD",
          fontSize: 20,
          fontWeight: "600",
          lineHeight: 32,
        }}
      >
        {ButtonName}
      </Text>
    </TouchableOpacity>
  );
};

export default ooredooButton;
