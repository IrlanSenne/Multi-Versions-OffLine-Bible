import React,{Component} from 'react';
import {  StyleSheet,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Setas extends React.Component{
    constructor(props){
        super(props)      
      }   
  
      render(){
          return( 
          <TouchableOpacity  onPress={()=>this.props.anterior()} style={[styles.sets]}>
               <FontAwesome5 style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-left'} size={30} />
          </TouchableOpacity>
          )
      }
}

const styles = StyleSheet.create({
    sets:{
        position:'absolute',
        top:'70%',
        left:'0.8%',
        backgroundColor:'rgba(250,250,250,1)',
        width:40,
        height:40,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        elevation:10
      },
});  