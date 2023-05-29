import { View, Text, Platform } from "react-native";
import React from "react";
import RegisterHeadline from "../components/registerHeadline";
import OoredooButton from "../components/ooredooButton";

type Props = { platform?: string; navigation?: any };

const accountCreated = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "600",
          color: "#333",
          marginBottom: 40,
        }}
      >
        Account Created
      </Text>
      <RegisterHeadline
        title="Congratulations"
        subtitle="please check the e-mail confirm your registration"
      />

      <View style={{ padding: 20, marginTop: 20 }}>
        <OoredooButton
          ButtonName="Login"
          setOnPress={() => {
            Platform.OS !== "web"
              ? navigation.navigate("Login")
              : (window.location.href = "/login");
          }}
        />
      </View>
    </View>
  );
};

export default accountCreated;
