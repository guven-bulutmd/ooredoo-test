
import { View, Text } from 'react-native'
import React from 'react'
import Login from "common";
import {getWelcomeString} from 'common/dist/dnm'
type Props = {}

const App = (props: Props) => {
  return (
    <View>
      <Login/>
     <Text>
        {
        getWelcomeString('mobile')
      } </Text>
    </View>
  )
}

export default App