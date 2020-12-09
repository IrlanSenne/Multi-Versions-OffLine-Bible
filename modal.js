import React,{Component} from 'react';
import {  StyleSheet,TouchableOpacity, View,Modal,Dimensions,Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height

export default class Modal2 extends React.Component{
    constructor(props){
        super(props)      
      }   
  
      render(){
          return( 
            <Modal
                visible={this.props.visible}
                animationType={'slide'}
                transparent={true}
          >             
            <View style={{flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'}}>   
              <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderTopRightRadius:10,borderTopLeftRadius:10,width:'100%',maxHeight:height * 0.4,paddingHorizontal:10}}>   
               <Text style={{color:'#422F6C',fontSize:20}}>Fonte</Text>
                <View style={styles.modal}>    
                    <TouchableOpacity style={{marginRight:20}} onPress={()=> this.props.diminuir()}><FontAwesome5 style={{color:'#fff'}} name={'minus-square'} size={22} /></TouchableOpacity>             
                    <TouchableOpacity style={{marginLeft:20}} onPress={()=> this.props.aumentar()}><FontAwesome5 style={{color:'#fff'}} name={'plus-square'} size={22} /></TouchableOpacity>       
                </View>
                <Text style={{color:'#422F6C',fontSize:20}}>Estilo</Text>
                <View style={styles.modal}>    
                    <TouchableOpacity style={{marginRight:20}} onPress={()=> this.props.leftFont()}><FontAwesome5 style={{color:'#fff'}} name={'angle-left'} size={22} /></TouchableOpacity>             
                    <Text style={{fontFamily:this.props.fontEstilo[this.props.pos],color:'rgba(178,151,224,0.8)',fontSize:20}}>Example</Text>
                    <TouchableOpacity style={{marginLeft:20}} onPress={()=> this.props.rightFont()}><FontAwesome5 style={{color:'#fff'}} name={'angle-right'} size={22} /></TouchableOpacity>       
                </View>
                <TouchableOpacity onPress={()=> this.props.save()} style={{marginVertical:10,width:60,height:20,backgroundColor:'#426712',justifyContent:'center',alignItems:'center',borderRadius:12}}><FontAwesome5 style={{color:'#fff',fontWeight:'bold'}} name={'check'} size={15} /></TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.reset()} style={{marginVertical:10,width:80,height:25,backgroundColor:'rgba(190,0,0,0.8)',justifyContent:'center',alignItems:'center',borderRadius:12}}><Text style={{color:'#fff'}}>reset</Text></TouchableOpacity>

              </View>
            </View>

          </Modal>
          )
      }
}

const styles = StyleSheet.create({
    modal:{
        width:'99.5%',
        backgroundColor:'rgba(0,0,0,0.8)',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
        marginVertical:5
      },
});  