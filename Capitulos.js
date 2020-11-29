import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text,TouchableOpacity,ScrollView } from 'react-native';
import Biblia from './biblia-acf.json'
import { useNavigation } from '@react-navigation/native';
import Header from './header'

export default function Capitulos(props){
    const navigation = useNavigation();
    var caps = []
    const livro = props.nome     
    const numeroCaps =Biblia[livro].length  
    const [capAtual,setCapAtual] = useState('-') 
        
        for(let i=0;i<numeroCaps;i++){
            caps.push(
                <View key={i}>               
                    <TouchableOpacity style={styles.cx} onPress={()=>listaVers(livro,i)}>                       
                            <Text style={styles.txt}>{i+1}</Text> 
                    </TouchableOpacity>                               
                </View>

            )           
        }    
        const listaVers = (l,c)=>{
           navigation.navigate('Versiculo', {liv:l,cap:c})
           setCapAtual(c+1)
        }
      
    return(
        <SafeAreaView>    
        <Header nomeLivro={livro} cap={capAtual}/>      
            <ScrollView>                
                <Text style={styles.title}>{livro}</Text>           
                <Text> {caps}</Text>        
            </ScrollView>      
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        txt:{ 
            color:'rgba(178,151,224,0.9)',
            fontSize:20,
            fontWeight:'bold' 
    },
    cx:{
        width:50,
        height:40,
        borderWidth:1,
        borderColor:'#32054B',
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        margin:7,
        padding:10,
        borderRadius:5
    },
    title:{
        backgroundColor:'rgba(138,106,124,0.3)',
        color:'#32054B',
        fontSize:25,
        padding:10,
        letterSpacing:2,
        margin:5
    }
  });  