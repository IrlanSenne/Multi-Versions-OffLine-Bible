import React from 'react';
import { SafeAreaView,StyleSheet,ScrollView, View, Text,} from 'react-native';

import Biblia from './biblia-acf.json'

const livros = ["Gênesis","Êxodo","Levítico","Números","Deuteronômio","Josué","Juízes","Rute","1 Samuel","2 Samuel","1 Reis","2 Reis","1 Crônicas","2 Crônicas","Esdras","Neemias","Ester","Jó","Salmos","Provérbios","Eclesiastes","Cânticos","Isaías","Jeremias","Lamentações","Ezequiel","Daniel","Oséias","Joel","Amós","Obadias","Jonas","Miquéias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","João","Atos","Romanos","1 Coríntios","2 Coríntios","Gálatas","Efésios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses","1 Timóteo","2 Timóteo","Tito","Filemom","Hebreus","Tiago","1 Pedro","2 Pedro","1 João","2 João","3 João","Judas","Apocalipse"]

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>
         Capitulos {Biblia['Salmos'].length} - Versiculos {Biblia['Salmos'][118].v.length}
      </Text>
    </ScrollView>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 2,
  },
  text: {
    fontSize: 42,
  },
});
