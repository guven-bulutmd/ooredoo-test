import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import React, {useState} from 'react';
import RegisterHeadline from 'common/dist/components/registerHeadline';
import OoredooButton from 'common/dist/components/ooredooButton';
import Button from 'common/dist/components/button';

type Props = {platform?: string; navigation?: any};

const deneme = (props: Props) => {
  

  return (
    <View style={{padding: 24, display: 'flex', flexDirection: 'column'}}>
      <Text style={{color:'#ED1C23',fontSize:24,textAlign:'center'}}>
        ooredoo
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 40,
          alignItems: 'center',
        }}>
        <Button
          style={{marginBottom: 20}}
          buttonName={'Login'}
           setOnPress={() => {
            Platform.OS !=='web' ? navigation.navigate('Login'): window.location.href = '/login';
          }}
        />
        <Button
          buttonName={'Signup'}
          setOnPress={() => {
            Platform.OS !=='web' ? navigation.navigate('Register'): window.location.href = '/register';
          }}
        />
      </View>
    </View>
  );
};

export default deneme;
