import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

type Props = {
  buttonName?: string;
  setOnPress?: any;
  style?: any;
};

const button = (props: Props) => {
  const { buttonName, setOnPress, style } = props;
  return (
    <TouchableOpacity
      onPress={setOnPress}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderRadius: 8,
        borderWidth: 1,
        width: 300,
        height: 50,
        ...style,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "400", color: "#333" }}>
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export default button;
