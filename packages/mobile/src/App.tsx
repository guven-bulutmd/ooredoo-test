import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
/* import RegisterHeadline from 'common/dist/components/registerHeadline'; */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation,useRoute} from '@react-navigation/native';
import Register from 'common/dist/Register/main';
import StepOne from 'common/dist/Register/stepOne';
import StepTwo from 'common/dist/Register/stepTwo';
import StepThree from 'common/dist/Register/stepThree';
import AccountCreated from 'common/dist/Register/accountCreated';
import Login from 'common/dist/Login/login';
import Main from 'common/dist/Main/main';

type Props = {};

const Stack = createNativeStackNavigator();
const App = (props: Props) => {
  const MainPage = () => {
    const navigation = useNavigation();
    return <Main navigation={navigation} />;
  };
  const RegisterPage = () => {
    const navigation = useNavigation();
    return <Register platform={'mobile'} navigation={navigation} />;
  };
  const StepOnePage = () => {
    const navigation = useNavigation();
    return <StepOne platform={'mobile'} navigation={navigation} />;
  };
  const StepTwoPage = () => {
    const navigation = useNavigation();
    return <StepTwo platform={'mobile'} navigation={navigation} useRoute={useRoute}/>;
  };
  const StepThreePage = () => {
    const navigation = useNavigation();
    return <StepThree platform={'mobile'} navigation={navigation} useRoute={useRoute}/>;
  };
  const AccountCreatedPage = () => {
    const navigation = useNavigation();
    return <AccountCreated navigation={navigation} />;
  };
  const LoginPage = () => {
    const navigation = useNavigation();
    return <Login navigation={navigation} />;
  };

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Welcome" component={MainPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Step One" component={StepOnePage} />
          <Stack.Screen name="Step Two" component={StepTwoPage} />
          <Stack.Screen name="Step Three" component={StepThreePage} />
          <Stack.Screen name="Congratulations" component={AccountCreatedPage} />
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
