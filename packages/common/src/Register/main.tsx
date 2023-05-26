import { View, Text } from "react-native";
import React from "react";
import Button from "../components/button";
import RegisterHeadline from "../components/registerHeadline";

type Props = { platform?: string,navigation?:any };

const App = (props:Props) => {
    const {platform,navigation} = props
  return (
    <View style={{ padding: 24, display: "flex", flexDirection: "column" }}>
      <RegisterHeadline
        title="Register with"
        subtitle="Please select your registration page"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <Button
          style={{ marginBottom: 20 }}
          buttonName={"Mobile Number"}
          setOnPress={() => {
            platform==='mobile' ? navigation.navigate('Step One'): window.location.href = '/registerStepOne';
          }}
        />
        <Button
          buttonName={"Landline Number"}
          setOnPress={() => {
            console.log("Landline Number");
          }}
        />
      </View>
    </View>
  );
};

export default App;
