import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import RegisterHeadline from "../components/registerHeadline";
import OTPInput from "../components/OTPInput";

type Props = { platform?: string; navigation?: any };

const stepTwo = (props: Props) => {
  const { platform, navigation } = props;
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
if(isPinReady){
  console.log('pin hazır',isPinReady)
}
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="Enter 4-digit code"
        subtitle="Let's confirm your identity. Enter the verification code sent to your mobile number ****921"
      />

      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          platform === "mobile"
          ? navigation.navigate("Step Three")
          : (window.location.href = "/registerStepThree");
        }}
      >
        <Text style={{ color: "#ED1C23", textDecorationLine: "underline" }}>
          Resend code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default stepTwo;
