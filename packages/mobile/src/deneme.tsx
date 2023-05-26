import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import React, {useState} from 'react';
import RegisterHeadline from 'common/dist/components/registerHeadline';
import OoredooButton from "common/dist/components/ooredooButton";
import useCustomValidation from './hooks';

type Props = { platform?: string; navigation?: any };

const deneme = (props: Props) => {
  const [MobileNumber, onChangeMobileNumber] = React.useState("");
  const [ID, onChangID] = React.useState("");
  const [Email, onChangEmail] = useState("");
  const [Password, onChangPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const { inputValue, errors, setInputValue, validateInput,isValid } = useCustomValidation();

  const handleChange = (e:any) => {
    onChangPassword(e)
    setInputValue(e);
    validateInput(e);
  };
  console.log('şifre',errors,'validate',isValid)
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
          onChangeText={onChangID}
          placeholder="Qatar ID or Passport ID"
          value={ID}
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
      {errors?.map((item:string,index:any)=>{
        return(
          <Text style={{color:'red'}}>{item}</Text>
        )
      })}
     
      <View style={{ padding: 20 }}>
        <OoredooButton
          ButtonName="Continue"
         /*  setOnPress={() => {
            Platform.OS!=='web'
              ? navigation.navigate("Congratulations")
              : (window.location.href = "/registerStepTwo");
          }} */
        />
      </View>
    </View>
  );
};

export default deneme;
