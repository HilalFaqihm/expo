import { View, Text, Image, ProgressBarAndroid } from 'react-native'
import React from 'react'
export default function loadingBar({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{justifyContent:'center', alignItems:'center',marginTop:200}}>
        <Image source={require('../assets/hehei.png')}/>
      </View>
      <View style={{alignItems:'center', justifyContent:'center',marginTop:245}}>
        <Text style={{color:'#F99722',fontSize:25,fontFamily:'PoppinsBold'}}>Tunggu Sebentar</Text>
        <Text style={{marginTop:20,color:'#F99722',fontFamily:'Poppins'}}>kami sedang menyiapkan data akun posku anda</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <ProgressBarAndroid progress={0.5} color={'#F99722'} indeterminate={true} styleAttr='Horizontal' style={{width:200,}} onTouchStart={() => navigation.navigate('Beranda')}/>
      </View>
    </View>
  )
}