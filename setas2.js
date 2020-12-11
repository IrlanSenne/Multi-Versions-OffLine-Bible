import React,{Component} from 'react';
import {  StyleSheet,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Setas2 extends React.Component{
    constructor(props){
        super(props)      
      }   
  
      render(){
          return(
            <TouchableOpacity  onPress={()=>this.props.proximo()} style={[styles.sets]}>
                 <FontAwesome5 style={{color:'rgba(123,0,0,0.6)',fontWeight:'bold'}} name={'angle-right'} size={30} />
            </TouchableOpacity> 
          )
      }
}

const styles = StyleSheet.create({
    sets:{
        position:'absolute',
        top:'70%',
        left:'89.5%',
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