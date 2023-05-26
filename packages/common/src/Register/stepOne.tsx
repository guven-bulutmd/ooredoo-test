import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import RegisterHeadline from "../components/registerHeadline";
import OoredooButton from "../components/ooredooButton";

type Props = { platform?: string,navigation?:any };

const stepOne = (props: Props) => {
  const [MobileNumber, onChangeMobileNumber] = React.useState("");
  const [ID, onChangID] = React.useState("");

  const {platform,navigation} = props
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
          onChangeText={onChangID}
          placeholder="Qatar ID or Passport ID"
          value={ID}
          keyboardType="numeric"
        />
      </View>
      <View style={{ padding: 20 }}>
        <OoredooButton
          ButtonName="Continue"
          setOnPress={() => {
            platform==='mobile' ? navigation.navigate('Step Two'): window.location.href = '/registerStepTwo';
          }}
        />
      </View>
    </View>
  );
};

export default stepOne;
