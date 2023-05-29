import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import RegisterHeadline from "../components/registerHeadline";
import OTPInput from "../components/OTPInput";

type Props = {navigation?: any; useRoute?: any };

const stepTwo = (props: Props) => {
  const { navigation, useRoute } = props;
  let serviceNumberFinal: any, QidFinal: any;
  if (Platform.OS !== "web") {
    const route = useRoute();
    const { serviceNumber, Qid } = route.params;
    serviceNumberFinal = serviceNumber;
    QidFinal = Qid;
  } else {
    const params = new URLSearchParams(window.location.search);
    serviceNumberFinal = params.get("serviceNumber");
    QidFinal = params.get("Qid");
  }

  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const maximumCodeLength = 4;

  useEffect(() => {
    const handleSubmit = async () => {
      if (otpCode?.length === 4) {
        console.log("İstek atıldı");

        setIsLoading(true);
        setIsError(false);

        try {
          const formData = {
            serviceNumber: serviceNumberFinal,
            otp: otpCode,
          };

          const response = await fetch("http://localhost:8080/verifyOTP", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error("API request failed");
          }
          const url = `/registerStepThree?serviceNumber=${serviceNumberFinal}&Qid=${QidFinal}`;
          if (Platform.OS !== "web") {
            navigation.navigate("Step Three",{serviceNumber:serviceNumberFinal,Qid:QidFinal});
          } else {
            window.location.href = url;
          }
          setSuccessMessage("Form submitted successfully!");
        } catch (error) {
          console.error(error);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleSubmit();
  }, [isPinReady]);

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
          const url = `/registerStepThree?serviceNumber=${serviceNumberFinal}&Qid=${QidFinal}`;
          if (Platform.OS !== "web") {
            navigation.navigate("Step Three", {
              serviceNumber: serviceNumberFinal,
              Qid: QidFinal,
            });
          } else {
            window.location.href = url;
          }
        }}
      >
        <Text style={{ color: "#ED1C23", textDecorationLine: "underline" }}>
          Resend code
        </Text>
      </TouchableOpacity>
      {isError && (
        <Text style={{ color: "red" }}>
          Error occurred while submitting the form.
        </Text>
      )}
      {successMessage && (
        <Text style={{ color: "green" }}>{successMessage}</Text>
      )}
    </View>
  );
};

export default stepTwo;
