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

type Props = { navigation?: any };

const stepOne = (props: Props) => {
  const { navigation } = props;
  const [MobileNumber, onChangeMobileNumber] = React.useState("");
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
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="Welcome to Ooredoo 👋 "
        subtitle="Please fill in your information below. Your mobile number should start with either 3, 5, 6 or 7."
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
          onChangeText={handleChangeMSN}
          placeholder="Mobile Number"
          value={MobileNumber}
          keyboardType="numeric"
        />
        {errorsMSN?.map((item: string, index: any) => {
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
          disabled={!isValidQid || !isValidMSN}
          ButtonName="Continue"
          setOnPress={() => {
            const url = `/registerStepTwo?serviceNumber=${MobileNumber}&Qid=${ID}`;
            if (Platform.OS !== "web") {
              navigation.navigate("Step Two", {
                serviceNumber: MobileNumber,
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
