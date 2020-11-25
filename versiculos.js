import React,{useState} from 'react';
import {  View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import Biblia from './biblia-acf.json'

const {height,width} = Dimensions.get('window')

export default function versiculos(props){

    var vers = []
    const cap = Number(props.cap)
    const livro = props.liv
    const numeroVers =Biblia[livro][cap].v.length
   
const [screenWidth,setScreenWidth]=useState(null)
const [screenHeight,setScreenHeight]=useState(null)    

    function _onLayout(e){
        setScreenWidth(Dimensions.get('window').width)
        setScreenHeight(Dimensions.get('window').height)        
    }
 


    for(let i=0;i<numeroVers;i++){
        vers.push(
            <View key={i}>              
               <View style={screenHeight > screenWidth ? styles.cx : styles.land} >
                    <Text> <View style={styles.numCx}><Text style={styles.num}>{Biblia[livro][cap].v[i].num}</Text></View><Text style={styles.txt}> {Biblia[livro][cap].v[i].t}</Text></Text>                            
               </View> 
            </View>
        )           
    }    
    return(       
        <ScrollView onLayout={_onLayout.bind(this)}>       
            <Text> {vers}</Text>    
        </ScrollView>        
    )
}
//react-native-shimmer-placeholder, Loading sem spinner
const styles = StyleSheet.create({
    cx:{
        flex:1,
        width:height,      
        flexDirection: "row",   
        flexWrap: "wrap",
        backgroundColor:'#eee',
        padding:5,
        marginBottom:5
        
    },
    land:{
        flex:1,
        width:width,
        flexDirection: "row",      
        flexWrap: "wrap",
        backgroundColor:'#eee',
        paddingHorizontal:5

    },
    txt:{
        fontSize:20,        
    },
    num:{
        fontSize:15,
        fontWeight:'bold',
        color:'#806CA5',
       
    },
    numCx:{
        backgroundColor:'rgba(128,108,165,0.1)',
        padding:5,
        borderRadius:6,
        
    }
    
  });
  
  