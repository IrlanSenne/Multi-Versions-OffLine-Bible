import React, { useState} from 'react';
import { SafeAreaView, View,TouchableOpacity, ScrollView, StyleSheet, Text,Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {height,width} = Dimensions.get('window')

export default function livros(){

  const [screenWidth,setScreenWidth]=useState(null)
  const [screenHeight,setScreenHeight]=useState(null)    

    function _onLayout(e){
        setScreenWidth(Dimensions.get('window').width)
        setScreenHeight(Dimensions.get('window').height)        
    }

  const [loading, setLoading]=useState(true)

    const navigation = useNavigation();
    const livros = [
        {l:'01', livro:"Gênesis",a:"Gn"},{l:'02', livro:"Êxodo",a:"Êx"},{l:'03', livro:"Levítico",a:"Lv"},
        {l:'04', livro:"Números",a:"Nm"},{l:'05', livro:"Deuteronômio",a:"Dt"},{l:'06', livro:"Josué",a:"Js"},
        {l:'07', livro:"Juízes",a:"Jz"},{l:'08', livro:"Rute",a:"Rt"},{l:'09', livro:"1 Samuel",a:"1 Sm"},
        {l:'10', livro:"2 Samuel",a:"2 Sm"},{l:'11', livro:"1 Reis",a:"1 Rs"},{l:'12', livro:"2 Reis",a:"2 Rs"},
        {l:'13', livro:"1 Crônicas",a:"1 Cr"},{l:'14', livro:"2 Crônicas",a:"2 Cr"},{l:'15', livro:"Esdras",a:"Ed"},
        {l:'16', livro:"Neemias",a:"Ne"},{l:'17', livro:"Ester",a:"Et"},{l:'18', livro:"Jó",a:"Jó"},
        {l:'19', livro:"Salmos",a:"Sl"},{l:'20', livro:"Provérbios",a:"Pv"},{l:'21', livro:"Eclesiastes",a:"Ec"},
        {l:'22', livro:"Cânticos",a:"Ct"},{l:'23', livro:"Isaías",a:"Is"},{l:'24', livro:"Jeremias",a:"Jr"},
        {l:'25', livro:"Lamentações",a:"Lm"},{l:'26', livro:"Ezequiel",a:"Ez"},{l:'27', livro:"Daniel",a:"Dn"},
        {l:'28', livro:"Oséias",a:"Os"},{l:'29', livro:"Joel",a:"Jl"},{l:'30', livro:"Amós",a:"Am"},
        {l:'31', livro:"Obadias",a:"Ob"},{l:'32', livro:"Jonas",a:"Jn"},{l:'33', livro:"Miquéias",a:"Mq"},
        {l:'34', livro:"Naum",a:"Nm"},{l:'35', livro:"Habacuque",a:"Hc"},{l:'36', livro:"Sofonias",a:"Sf"},
        {l:'37', livro:"Ageu",a:"Ag"},{l:'38', livro:"Zacarias",a:"Zc"},{l:'39', livro:"Malaquias",a:"Ml"},
        {l:'40', livro:"Mateus",a:"Mt"},{l:'41', livro:"Marcos",a:"Mc"},{l:'42', livro:"Lucas",a:"Lc"},
        {l:'43', livro:"João",a:"Jo"},{l:'44', livro:"Atos",a:"At"},{l:'45', livro:"Romanos",a:"Rm"},
        {l:'46', livro:"1 Coríntios",a:"1 Co"},{l:'47', livro:"2 Coríntios",a:"2 Co"},{l:'48', livro:"Gálatas",a:"Gl"},
        {l:'49', livro:"Efésios",a:"Ef"},{l:'50', livro:"Filipenses",a:"Fp"},{l:'51', livro:"Colossenses",a:"Cl"},
        {l:'52', livro:"1 Tessalonicenses",a:"1 Ts"},{l:'53', livro:"2 Tessalonicenses",a:"2 Ts"},{l:'54', livro:"1 Timóteo",a:"1 Tm"},
        {l:'55', livro:"2 Timóteo",a:"2 Tm"},{l:'56', livro:"Tito",a:"Tt"},{l:'57', livro:"Filemom",a:"Fm"},
        {l:'58', livro:"Hebreus",a:"Hb"},{l:'59', livro:"Tiago",a:"Tg"},{l:'60', livro:"1 Pedro",a:"1 Pe"},
        {l:'61', livro:"2 Pedro",a:"2 Pe"},{l:'62', livro:"1 João",a:"1 Jo"},{l:'63', livro:"2 João",a:"2 Jo"},
        {l:'64', livro:"3 João",a:"3 Jo"},{l:'65', livro:"Judas",a:"Jd"},{l:'66', livro:"Apocalipse",a:"Ap"}
      ] 
    const titulos = []
      for(let i=0;i<livros.length;i++){
        titulos.push(
            <View key={livros[i].l}>     
            <View style={styles.container}>         
               <TouchableOpacity onPress={()=>goToCap(livros[i].livro)} 
               style={screenHeight > screenWidth ? styles.item : styles.item2}>
                 <Text><View style={{flex:1,flexDirection:'row',width:width}}><View style={{width:'25%'}}><View style={styles.ab}><Text style={{
                    color:'#fff',
                    fontSize:15,
                    fontFamily:'BarlowCondensed-Regular',
                    letterSpacing:2                    
                   }}
                   >{livros[i].a}</Text></View></View><View style={{width:'75%', justifyContent:'center'}}><Text style={styles.title}>{livros[i].livro}</Text></View></View></Text>
               </TouchableOpacity>
               </View>
            </View>
        )           
    }    
    const goToCap = (t)=>{
      navigation.navigate('Capitulo',{nome:t} )
  }    
    return(
        <SafeAreaView  onLayout={_onLayout.bind(this)} style={styles.container}>      
         <StatusBar
            barStyle='light-content'
            backgroundColor='#3f1775'
            hidden={false}
    />    
          <ScrollView >       
              <Text> {titulos}</Text>    
          </ScrollView> 
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ab:{
      flex:1,
      width:65,
      height:65,
      borderRadius:60,
      backgroundColor:'#3f1775',
      alignItems:'center',
      justifyContent:'center',
      padding:5     
    },
    item: {
      flex:1,
      width:height,
      backgroundColor: 'rgba(205,202,216,0.4)',
      padding: 10,
      marginVertical: 3,
      marginHorizontal: 5,
      justifyContent:'center'
    },
    item2: {
      flex:1,
      width:width,
      backgroundColor: 'rgba(205,202,216,0.4)',
      padding: 10,
      marginVertical: 3,
      marginHorizontal: 5,
      justifyContent:'center'     
    },
    title: {
      fontFamily:'BarlowCondensed-Regular',
      color:'#32054B',
      fontSize: 25,
    letterSpacing:1    },
  });     