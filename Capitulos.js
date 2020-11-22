import React from 'react';
import { SafeAreaView, View, StyleSheet, Text,TouchableOpacity,ScrollView } from 'react-native';
import Biblia from './biblia-acf.json'
import { useNavigation } from '@react-navigation/native';


export default function Capitulos(props){
    const navigation = useNavigation();
    var caps = []
    const livro = props.nome     
    const numeroCaps =Biblia[livro].length       
        
        for(let i=0;i<numeroCaps;i++){
            caps.push(
                <View key={i}>
                    <TouchableOpacity onPress={()=>listaVers(livro,i)}>
                   <View style={styles.cx}>
                       <Text style={styles.txt}>{i+1}</Text>                   
                    </View>
                    </TouchableOpacity>
                   
                    </View>

            )           
        }    
        const listaVers = (l,c)=>{
           navigation.navigate('Versiculo', {liv:l,cap:c})
        }

    return(
        <SafeAreaView >
        <ScrollView>
            <Text style={styles.title}>{livro}</Text>           
          <Text style={styles.conteiner}> {caps}</Text>        
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        txt:{ 
            color:'#32054B',
            fontSize:20     
    },
    cx:{ width:50,
        height:40,
        borderWidth:1,
        borderColor:'#9087A8',
        backgroundColor:'rgba(144,135,168,0.2)',
        alignItems:'center',
        margin:2,
        padding:5
    },
    conteiner:{
        marginBottom:10,
        alignItems:'center'
    },
    title:{
        color:'#9087A8',
        fontSize:30,
        padding:10,
        fontWeight:'bold'
    }
  });  