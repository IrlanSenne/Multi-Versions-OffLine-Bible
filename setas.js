import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Dimensions, StatusBar, View,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const {height, width} = Dimensions.get('window')

export default function Header (props){
    const navigation = useNavigation();

    const before=()=>{
        navigation.navigate('Versiculo',{cap:props.capt - 1,liv:props.livr})
    }
    function next(){
        navigation.navigate('Versiculo',{cap:props.capt + 1,liv:props.livr})
    }
   
    return(
        <View>
    <TouchableHighlight  onPress={()=>before()}><FontAwesome5  style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-left'} size={30} /></TouchableHighlight>
      <TouchableHighlight onPress={()=>next()}><FontAwesome5  style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-right'} size={30} /></TouchableHighlight>
 
        </View>
    )
}

const styles = StyleSheet.create({
   
});  