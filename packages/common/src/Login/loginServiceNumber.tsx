import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RegisterHeadline from "../components/registerHeadline";
import OoredooButton from "../components/ooredooButton";

type Props = {};

const loginServiceNumber = (props: Props) => {
  const [ServiceNumber, onChangServiceNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    setIsError(false);

    try {
      const formData = {
        serviceNumber: ServiceNumber,
      };
      const response = await fetch(
        "http://localhost:8080/login/serviceNumber",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      setSuccessMessage("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      setIsError(true);
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="Login to my ooredoo"
        subtitle="Login with service number"
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
          onChangeText={onChangServiceNumber}
          placeholder="Service Number"
          value={ServiceNumber}
        />

        {isError && (
          <Text style={{ color: "red" }}>
            Error occurred while submitting the form.
          </Text>
        )}
        {successMessage && (
          <Text style={{ color: "green" }}>{successMessage}</Text>
        )}
        <View style={{ padding: 20 }}>
          <OoredooButton
            ButtonName={isLoading ? "Submitting..." : "Login"}
            disabled={isLoading}
            setOnPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default loginServiceNumber;
