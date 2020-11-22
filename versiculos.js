import React from 'react';
import { SafeAreaView, View,TouchableOpacity, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Biblia from './biblia-acf.json'

export default function versiculos(props){

    var vers = []
    const cap = Number(props.cap)
    const livro = props.liv
    const numeroVers =Biblia[livro][cap].v.length

    for(let i=0;i<numeroVers;i++){
        vers.push(
            <View key={i}>              
               <View style={styles.cx}>
                 <Text style={styles.txt}>{Biblia[livro][cap].v[i].num}. {Biblia[livro][cap].v[i].t} </Text>            
               </View> 
            </View>
        )           
    }    
    return(       
        <ScrollView >
         <View >
            <Text> {vers}</Text>
            </View>
        </ScrollView>        
    )
}

const styles = StyleSheet.create({
    cx:{
        width:350,
      
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap"
      
           
    },
    txt:{
        fontSize:20,
          
        
    }
  });
  
  