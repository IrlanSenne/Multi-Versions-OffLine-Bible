import React from 'react';
import { SafeAreaView, View,TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function livros(){
    const navigation = useNavigation();
    const livros = [
        {l:'01', livro:"Gênesis"},{l:'02', livro:"Êxodo"},{l:'03', livro:"Levítico"},
        {l:'04', livro:"Números"},{l:'05', livro:"Deuteronômio"},{l:'06', livro:"Josué"},
        {l:'07', livro:"Juízes"},{l:'08', livro:"Rute"},{l:'09', livro:"1 Samuel"},
        {l:'10', livro:"2 Samuel"},{l:'11', livro:"1 Reis"},{l:'12', livro:"2 Reis"},
        {l:'13', livro:"1 Crônicas"},{l:'14', livro:"2 Crônicas"},{l:'15', livro:"Esdras"},
        {l:'16', livro:"Neemias"},{l:'17', livro:"Ester"},{l:'18', livro:"Jó"},
        {l:'19', livro:"Salmos"},{l:'20', livro:"Provérbios"},{l:'21', livro:"Eclesiastes"},
        {l:'22', livro:"Cânticos"},{l:'23', livro:"Isaías"},{l:'24', livro:"Jeremias"},
        {l:'25', livro:"Lamentações"},{l:'26', livro:"Ezequiel"},{l:'27', livro:"Daniel"},
        {l:'28', livro:"Oséias"},{l:'29', livro:"Joel"},{l:'30', livro:"Amós"},
        {l:'31', livro:"Obadias"},{l:'32', livro:"Jonas"},{l:'33', livro:"Miquéias"},
        {l:'34', livro:"Naum"},{l:'35', livro:"Habacuque"},{l:'36', livro:"Sofonias"},
        {l:'37', livro:"Ageu"},{l:'38', livro:"Zacarias"},{l:'39', livro:"Malaquias"},
        {l:'40', livro:"Mateus"},{l:'41', livro:"Marcos"},{l:'42', livro:"Lucas"},
        {l:'43', livro:"João"},{l:'44', livro:"Atos"},{l:'45', livro:"Romanos"},
        {l:'46', livro:"1 Coríntios"},{l:'47', livro:"2 Coríntios"},{l:'48', livro:"Gálatas"},
        {l:'49', livro:"Efésios"},{l:'50', livro:"Filipenses"},{l:'51', livro:"Colossenses"},
        {l:'52', livro:"1 Tessalonicenses"},{l:'53', livro:"2 Tessalonicenses"},{l:'54', livro:"1 Timóteo"},
        {l:'55', livro:"2 Timóteo"},{l:'56', livro:"Tito"},{l:'57', livro:"Filemom"},
        {l:'58', livro:"Hebreus"},{l:'59', livro:"Tiago"},{l:'60', livro:"1 Pedro"},
        {l:'61', livro:"2 Pedro"},{l:'62', livro:"1 João"},{l:'63', livro:"2 João"},
        {l:'64', livro:"3 João"},{l:'65', livro:"Judas"},{l:'66', livro:"Apocalipse"}
      ] 
      
      const Item = ({ title }) => (
        <TouchableOpacity onPress={()=>goToCap(title)} style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      );
      const renderItem = ({ item }) => (
        <Item title={item.livro} />
      );
      const goToCap = (t)=>{
          navigation.navigate('Capitulo',{nome:t} )
      }
    return(
        <SafeAreaView style={styles.container}>
        <FlatList
       data={livros}
       renderItem={renderItem}
       keyExtractor={item => item.l}
     />  
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    item: {
      backgroundColor: 'rgba(205,202,216,0.4)',
      padding: 10,
      marginVertical: 3,
      marginHorizontal: 5,
    },
    title: {
      color:'#32054B',
      fontSize: 18,
      fontWeight:'bold'
    },
  });
  
  