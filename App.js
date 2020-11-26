import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Titulos from './Livros'
import Capitulos from './Capitulos'
import Versiculos from './versiculos'

const Pilha = createStackNavigator()

function Capitulo({route,navigation}){
const {nome} = route.params
  return(     
      <Capitulos nome={nome}/>   
  )
}

function Livros({navigation}){
  return(    
    <Titulos/>       
  )
}

function Vers({route,navigation}){
  const {liv} = route.params
  const {cap} = route.params

  return(     
      <Versiculos liv={liv} cap={cap} />    
  )
}

export default function  App ()  {

  return (  
      <NavigationContainer>
        <Pilha.Navigator headerMode='none'>
          <Pilha.Screen
            name='Livros'
            component={Livros}
          />
           <Pilha.Screen
            name='Capitulo'
            component={Capitulo}
          />
          <Pilha.Screen
            name='Versiculo'
            component={Vers}
          />
        </Pilha.Navigator>
     </NavigationContainer>    
  );
}