import { View, Text } from "react-native";
import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
};

const registerHeadline = (props: Props) => {
    const {title, subtitle} = props
  return (
    <View>
      <Text style={{ fontSize: 40, fontWeight: "600", color: "#333" }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "400",
          color: "#333",
          marginTop: 24,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default registerHeadline;
