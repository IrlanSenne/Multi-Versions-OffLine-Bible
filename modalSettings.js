import React, {useState, Component} from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Modal,Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get('window')

export default function ModalSet(props) {
    const [visible,setVisible] = useState(true)
    const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Modal 
    visible={visible}
    animationType={'slide'} 
    transparent={true}

    >
    <View style={{flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'}}>

    <View style={{
        backgroundColor:"#ffffff",
        width:'100%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:10,
        maxHeight:height
        }}>
    <View>
    <Text style={styles.popTxt}>Tamanho da fonte</Text><TouchableOpacity onPress={()=>setVisible(false)}><Text>FECHAR</Text></TouchableOpacity>
    <View style={styles.line}></View><TouchableOpacity  onPress={()=>navigation.navigate('Capitulo')}><Text>Incrementar</Text></TouchableOpacity>
    <Text style={styles.popTxt}>Estilo</Text>
    <View style={styles.line}></View>

    </View>
    </View>
    </View>
</Modal>
</SafeAreaView>
  )
    
  }

const styles = StyleSheet.create({
    popTxt:{
        color:'#182E44',
        fontSize:15,
        fontWeight:'500',
        margin:15,
        marginLeft:15
      },
      line:{
        opacity:0.1,
        backgroundColor:'#182E44',
        height:1.5
      }
})



