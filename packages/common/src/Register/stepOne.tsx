import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import RegisterHeadline from "../components/registerHeadline";
import OoredooButton from "../components/ooredooButton";
import useCustomValidationQıd from "../hooks/qidValidation";
import useCustomValidationMSN from "../hooks/mobileServiceNumberValidation";
import useCustomValidationLN from "../hooks/landlineNumberValidation";

type Props = { navigation?: any; useRoute?: any };

const stepOne = (props: Props) => {
  // This component is written according to mobile number and landline number parameters.
  const { navigation, useRoute } = props;

  let isLandlineFinal: any;
  if (Platform.OS !== "web") {
    const route = useRoute();
    isLandlineFinal = route?.params?.isLandline
  } else {
    const params = new URLSearchParams(window.location.search);
    isLandlineFinal = params.get("isLandline");
  }

  const [MobileNumber, onChangeMobileNumber] = React.useState("");
  const [LandlineNumber, onChangeLandlineNumber] = React.useState("");
  const [ID, onChangID] = React.useState("");
  const {
    inputValue: inputValueQid,
    errors: errorsQid,
    setInputValue: setInputValueQid,
    validateInput: validateInputQid,
    isValid: isValidQid,
  } = useCustomValidationQıd();

  const {
    inputValue: inputValueMSN,
    errors: errorsMSN,
    setInputValue: setInputValueMSN,
    validateInput: validateInputMSN,
    isValid: isValidMSN,
  } = useCustomValidationMSN();

  const {
    inputValue: inputValueLN,
    errors: errorsLN,
    setInputValue: setInputValueLN,
    validateInput: validateInputLN,
    isValid: isValidLN,
  } = useCustomValidationLN();

  const handleChangeQıd = (e: any) => {
    onChangID(e);
    setInputValueQid(e);
    validateInputQid(e);
  };
  const handleChangeMSN = (e: any) => {
    onChangeMobileNumber(e);
    setInputValueMSN(e);
    validateInputMSN(e);
  };
  const handleChangeLandline = (e: any) => {
    onChangeLandlineNumber(e);
    setInputValueLN(e);
    validateInputLN(e);
  };
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="Welcome to Ooredoo 👋 "
        subtitle={`Please fill in your information below. Your ${
          isLandlineFinal === "true" ? "landline number" : "mobile number"
        } should start with either 3, 5, 6 or 7.`}
      />

      <View style={{ marginTop: 40 }}>
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={
            isLandlineFinal === "true" ? handleChangeLandline : handleChangeMSN
          }
          placeholder={
            isLandlineFinal === "true" ? "LandLine Number" : "Mobile Number"
          }
          value={isLandlineFinal === "true" ? LandlineNumber : MobileNumber}
          keyboardType="numeric"
        />
        {isLandlineFinal
          ? errorsLN?.map((item: string, index: any) => {
              return <Text style={{ color: "red" }}>{item}</Text>;
            })
          : errorsMSN?.map((item: string, index: any) => {
              return <Text style={{ color: "red" }}>{item}</Text>;
            })}
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={handleChangeQıd}
          placeholder="Qatar ID or Passport ID"
          value={ID}
          keyboardType="numeric"
        />
        {errorsQid?.map((item: string, index: any) => {
          return <Text style={{ color: "red" }}>{item}</Text>;
        })}
      </View>
      <View style={{ padding: 20 }}>
        <OoredooButton
          disabled={isLandlineFinal==='true' ? !isValidQid || !isValidLN : !isValidQid || !isValidMSN}
          ButtonName="Continue"
          setOnPress={() => {
            const url = `/registerStepTwo?serviceNumber=${
              isLandlineFinal === "true" ? LandlineNumber : MobileNumber
            }&Qid=${ID}`;
            if (Platform.OS !== "web") {
              navigation.navigate("Step Two", {
                serviceNumber:
                  isLandlineFinal === "true" ? LandlineNumber : MobileNumber,
                Qid: ID,
              });
            } else {
              window.location.href = url;
            }
          }}
        />
      </View>
    </View>
  );
};

export default stepOne;
