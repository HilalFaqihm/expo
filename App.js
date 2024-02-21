
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import daftar from './screen/Daftar';
import Masuk from './screen/Masuk';
import PilihOutlet from './screen/PilihOutlet';
import loadingBar from './screen/loadingBar';
import onBoarding from './screen/onBoarding';
import Beranda from './screen/Beranda';
import Google from './screen/Google';
import Whatsapp from './screen/Whatsapp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onBoarding'>
      <Stack.Screen name='onBoarding' component={onBoarding} options={{headerShown:false}}/>
      <Stack.Screen name='Daftar' component={daftar}/>
      <Stack.Screen name='Masuk' component={Masuk}/>
      <Stack.Screen name='Pilih Outlet' component={PilihOutlet}/>
      <Stack.Screen name='LoadingBar' component={loadingBar} options={{headerShown:false}}/>
      <Stack.Screen name='Beranda' component={Beranda} options={{headerShown:false}}/>
      <Stack.Screen name='Masuk dengan email' component={Google}/>
      <Stack.Screen name='Masuk dengan WA' component={Whatsapp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}