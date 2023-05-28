import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import OoredooButton from "../components/ooredooButton";
import RegisterHeadline from "../components/registerHeadline";
import useCustomValidation from "../hooks/passwordValidation";
import useCustomValidationQıd from "../hooks/qidValidation";

type Props = { platform?: string; navigation?: any };

const stepThree = (props: Props) => {
  const { platform, navigation } = props;
  const [MobileNumber, onChangeMobileNumber] = useState("");
  const [ID, onChangID] = useState("");
  const [Email, onChangEmail] = useState("");
  const [Password, onChangPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const { inputValue, errors, setInputValue, validateInput, isValid } =
    useCustomValidation();
  const {
    inputValue: inputValueQid,
    errors: errorsQid,
    setInputValue: setInputValueQid,
    validateInput: validateInputQid,
    isValid: isValidQid,
  } = useCustomValidationQıd();

  const handleChangeQıd = (e: any) => {
    onChangID(e);
    setInputValueQid(e);
    validateInputQid(e);
  };

  const handleChange = (e: any) => {
    onChangPassword(e);
    setInputValue(e);
    validateInput(e);
  };
  console.log("şifre", errors, "validate", isValid);
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="You're nearly there"
        subtitle="Ahmad, we need some information before completing your registration."
      />

      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={onChangeMobileNumber}
          placeholder="Mobile Number"
          value={MobileNumber}
          keyboardType="numeric"
        />

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
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={onChangEmail}
          placeholder="Email Adress"
          value={Email}
        />

        <TouchableOpacity
          style={{ display: "flex", alignItems: "flex-end", width: 330 }}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <Text>{showPassword ? "Show Password" : "Hide Password"}</Text>
        </TouchableOpacity>
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          secureTextEntry={showPassword}
          onChangeText={handleChange}
          placeholder="Password"
          value={Password}
        />
      </View>
      {errors?.map((item: string, index: any) => {
        return <Text style={{ color: "red" }}>{item}</Text>;
      })}
      <View style={{ padding: 20 }}>
        <OoredooButton
          ButtonName="Continue"
          setOnPress={() => {
            Platform.OS !== "web"
              ? navigation.navigate("Congratulations")
              : (window.location.href = "/accountCreated");
          }}
        />
      </View>
    </View>
  );
};

export default stepThree;
