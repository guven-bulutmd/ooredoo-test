import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RegisterHeadline from '../components/registerHeadline';
import OoredooButton from '../components/ooredooButton';

type Props = {navigation?:any}

const login = (props: Props) => {
    const {navigation} = props
    const [Email, onChangEmail] = useState('');
    const [Password, onChangPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
  
    return (
      <View style={{padding: 24, display: 'flex', flexDirection: 'column'}}>
        <RegisterHeadline
          title="Login to my ooredoo"
          subtitle="Login with username and password"
        />
  
        <View style={{marginTop: 40, marginBottom: 20}}>
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
            style={{display: 'flex', alignItems: 'flex-end', width: 330}}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Text>{showPassword ? 'Show Password' : 'Hide Password'}</Text>
          </TouchableOpacity>
  
          <View style={{padding: 20}}>
            <OoredooButton
              ButtonName="Login"
              /*  setOnPress={() => {
              Platform.OS!=='web'
                ? navigation.navigate("Congratulations")
                : (window.location.href = "/registerStepTwo");
            }} */
            />
          </View>
        </View>
      </View>
    );
}

export default login