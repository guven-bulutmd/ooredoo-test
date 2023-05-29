import { View, Text, Platform } from "react-native";
import React from "react";
import Button from "../components/button";
import RegisterHeadline from "../components/registerHeadline";

type Props = {navigation?:any };

const App = (props:Props) => {
    const {navigation} = props
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
            Platform.OS !=='web' ? navigation.navigate('Step One'): window.location.href = '/registerStepOne';
          }}
        />
        <Button
          buttonName={"Landline Number"}
          setOnPress={() => {
            const url = `/registerStepOne?isLandline=${"true"}`;
            if (Platform.OS !== "web") {
              navigation.navigate("Step One", {
                isLandline:"true"
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

export default App;
