import React,{Component} from 'react';
import {  StyleSheet,TouchableOpacity, View,Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Modal2 extends React.Component{
    constructor(props){
        super(props)      
      }   
  
      render(){
          return(
              <View style={styles.container}>                      
                <TouchableOpacity onPress={()=> this.props.setColor('#EB7F8B')} style={[styles.squareColor,{backgroundColor:'#EB7F8B'}]}><Text style={{opacity:1}}>.</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.setColor('#DAE17A')} style={[styles.squareColor,{backgroundColor:'#DAE17A'}]}><Text style={{opacity:1}}>.</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.setColor('#AB8FAC')} style={[styles.squareColor,{backgroundColor:'#AB8FAC'}]}><Text style={{opacity:1}}>.</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.setColor('#78C0C9')} style={[styles.squareColor,{backgroundColor:'#78C0C9'}]}><Text style={{opacity:1}}>.</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.setColor('#7FB9AD')} style={[styles.squareColor,{backgroundColor:'#7FB9AD'}]}><Text style={{opacity:1}}>.</Text></TouchableOpacity>         
              </View>    
          )
      }
}

const styles = StyleSheet.create({
    squareColor:{
        width:27,
        height:27,
        margin:5
    },
    container:{
        position:'absolute',top:'92%' ,left:0 ,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'flex-end',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        width:'100%',
        maxHeight:40,
        paddingHorizontal:10
    },
    modal:{
        marginVertical:10,
        width:45,
        height:25,
        backgroundColor:'rgba(190,0,0,0.8)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
      },
});  