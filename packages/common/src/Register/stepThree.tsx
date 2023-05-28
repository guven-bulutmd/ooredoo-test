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

type Props = { platform?: string; navigation?: any; useRoute?: any };

const stepThree = (props: Props) => {
  const { platform, navigation, useRoute } = props;
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

  const [MobileNumber, onChangeMobileNumber] = useState(
    serviceNumberFinal ? serviceNumberFinal : ""
  );
  const [ID, onChangID] = useState(QidFinal ? QidFinal : "");
  const [Email, onChangEmail] = useState("");
  const [Password, onChangPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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

  const handleSubmit = async () => {
    
      console.log("İstek atıldı");
      setIsLoading(true);
      setIsError(false);

      try {
        const formData = {
          serviceNumber: serviceNumberFinal,
          qid: QidFinal,
          email:Email,
          password:Password
        };

        const response = await fetch("http://localhost:8080/registerCustomer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("API request failed");
        }
        const url = `/accountCreated`;
        if (Platform.OS !== "web") {
          navigation.navigate("Congratulations");
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
            backgroundColor:'#F0F0F0',
            color:'#6D6D6D'
          }}
          editable={false}
          selectTextOnFocus={false}
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
            backgroundColor:'#F0F0F0',
            color:'#6D6D6D'
          }}
          editable={false}
          selectTextOnFocus={false}
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
        <TouchableOpacity
          style={{ display: "flex", alignItems: "flex-end", width: 330 }}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <Text>{showPassword ? "Show Password" : "Hide Password"}</Text>
        </TouchableOpacity>
      </View>
      {errors?.map((item: string, index: any) => {
        return <Text style={{ color: "red" }}>{item}</Text>;
      })}
      <View style={{ padding: 20 }}>
        <OoredooButton
        disabled={!isValid}
          ButtonName="Continue"
          setOnPress={() => {
            handleSubmit()
          }}
        />
      </View>
    </View>
  );
};

export default stepThree;
