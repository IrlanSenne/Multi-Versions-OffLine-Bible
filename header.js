import React,{useState} from 'react';
import { View, StyleSheet, Text, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const {height, width} = Dimensions.get('window')

export default function Header (props){
    const navigation = useNavigation();

    const [tamPor,setTamPor] = useState(null)
    const [tamLan,setTamLan] = useState(null)

    function _onLayout(e){
        setTamPor(Dimensions.get('window').width)
        setTamLan(Dimensions.get('window').height)        
    }
    function _onPress(){
        navigation.navigate('Livros')
    }
    function _onPress2(){
        navigation.navigate('Capitulo')
    }
    return(
        <View 
        style={tamLan > tamPor ? styles.headerPortrait : styles.headerLand} onLayout={_onLayout.bind(this)}>
         <StatusBar
            barStyle='light-content'
            backgroundColor='rgba(0,0,0,0.7)'
            hidden={true}
    />           
           <TouchableOpacity onPress={()=>_onPress()} style={styles.topMenu}>
             <Text style={{color:'#fff',fontSize:16}}>{props.nomeLivro}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>_onPress2()} style={styles.topMenu2}>
               <Text style={{color:'#fff',fontSize:16}}>{props.cap}</Text>
           </TouchableOpacity>
           <View style={styles.topMenu3}>
               <Text style={{color:'#fff',fontSize:16}}>ACF</Text>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerPortrait:{  
        height:62,    
        flexDirection: "row",   
        backgroundColor:'#000',
        alignItems:'center',
        alignContent:'center',
       justifyContent:'space-around',
        paddingHorizontal:20,
        borderBottomWidth:2,
        borderBottomColor:'#fff'

    },
    headerLand:{
        height:62, 
        flexDirection: "row",     
        backgroundColor:'#000',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-around',
        paddingLeft:15,
        paddingRight:15,
        borderBottomWidth:2,
        borderBottomColor:'#fff'
    },
    topMenu:{
        width:'46%',
        height:40,
        borderWidth:2,
        borderColor:'rgba(178,151,224,0.8)',    
        alignItems:'center',
        justifyContent:'center',
        
    },
    topMenu2:{  
        width:'28%',
        height:40,
        borderWidth:2,
        borderColor:'rgba(178,151,224,0.8)',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:25
       
    },
    topMenu3:{   
        width:'28%',
        height:40,
        borderWidth:2,
        borderColor:'rgba(178,151,224,0.8)',     
        alignItems:'center',
        justifyContent:'center',
        
    }
});  