import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RegisterHeadline from "../components/registerHeadline";
import OoredooButton from "../components/ooredooButton";

type Props = { navigation?: any };

const login = (props: Props) => {
  const { navigation } = props;
  const [Email, onChangEmail] = useState("");
  const [Password, onChangPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    setIsLoading(true);
    setIsError(false);

    try {
        const formData = {
            "password":Password,
            "email":Email,
          };
      const response = await fetch("http://localhost:8080/login/username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      setSuccessMessage("Form submitted successfully!");
      
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="Login to my ooredoo"
        subtitle="Login with username and password"
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
          onChangeText={onChangEmail}
          placeholder="Email or username"
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
          onChangeText={onChangPassword}
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
        {isError && <Text style={{color:'red'}}>Error occurred while submitting the form.</Text>}
        {successMessage && <Text style={{color:'green'}}>{successMessage}</Text>}
        <View style={{ padding: 20 }}>
          <OoredooButton
            ButtonName={isLoading ? 'Submitting...' : 'Login'}
            disabled={isLoading}
             setOnPress={handleSubmit}
          />
        </View>
       
      </View>
    </View>
  );
};

export default login;
