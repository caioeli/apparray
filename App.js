import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts, NewTegomin_400Regular,
  JetBrainsMono_100Thin,
  JetBrainsMono_200ExtraLight,
  JetBrainsMono_300Light,
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
  JetBrainsMono_800ExtraBold,
  JetBrainsMono_100Thin_Italic,
  JetBrainsMono_200ExtraLight_Italic,
  JetBrainsMono_300Light_Italic,
  JetBrainsMono_400Regular_Italic,
  JetBrainsMono_500Medium_Italic,
  JetBrainsMono_600SemiBold_Italic,
  JetBrainsMono_700Bold_Italic,
  JetBrainsMono_800ExtraBold_Italic,
} from '@expo-google-fonts/dev';





export default function App() {




  let [fontsLoaded] = useFonts({
    NewTegomin_400Regular,
    JetBrainsMono_100Thin,
    JetBrainsMono_200ExtraLight,
    JetBrainsMono_300Light,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold,
    JetBrainsMono_800ExtraBold,
    JetBrainsMono_100Thin_Italic,
    JetBrainsMono_200ExtraLight_Italic,
    JetBrainsMono_300Light_Italic,
    JetBrainsMono_400Regular_Italic,
    JetBrainsMono_500Medium_Italic,
    JetBrainsMono_600SemiBold_Italic,
    JetBrainsMono_700Bold_Italic,
    JetBrainsMono_800ExtraBold_Italic,

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {


    return (
      <View style={estilo.container1}>
        <Text style={estilo.titulo1}>- REDES SOCIAL - ENCONTROS SENAC </Text>
        <Text style={estilo.titulo3}>Você tem Projeto Integrador ?</Text>
        <Text style={estilo.titulo2}>Quer envolver novas Àreas ?</Text>
        <Text style={estilo.linhahorizontalt}></Text>
        <StatusBar style="auto" />
        <FlatList
          data={pessoas}
          renderItem={({ item }) =>
            <View style={estilo.container2}>

              <View style={estilo.container3}>
                <Image style={estilo.img} source={item.img} />
                <Text style={estilo.nome}>{item.nome}</Text>

              </View>

              <Text style={estilo.uid}>Curso: {item.curso}</Text>
              <Text style={estilo.uid}>Periodo: {item.periodo}</Text>
              <Text style={estilo.uid}>Turma: {item.turma}</Text>
              <Text style={estilo.uid}>O que mais gosto ?               {item.gosto}</Text>
              <Text style={estilo.bio}>Biografia:                       {item.bio}</Text>
              <Text style={estilo.linhahorizontalt}></Text>


              <Text style={estilo.pessoas}> </Text>

            </View>

          }
        />

      </View>
    );
  }
}


const estilo = StyleSheet.create({
  container1: {
    marginTop: 40,
    margin: 12,
    flex: 1,
    backgroundColor: '#FF0A0A',
    justifyContent: 'center',
    fontFamily: 'JetBrainsMono_400Regular',
    textAlign: 'center',

  },

  container3: {

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFF',

  },

  container2: {
    backgroundColor: '#FF1F1F',



  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 200,
    margin: 2,
    alignItems: 'center',
    textAlign: 'center',
  },

  titulo1: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 15,

    fontFamily: 'NewTegomin_400Regular',
  },

  titulo2: {
    fontSize: 21,
    marginTop: 10,
    marginLeft: 5,
    fontFamily: 'JetBrainsMono_500Medium',
  },
  titulo3: {
    fontSize: 21,
    marginLeft: 5,
    fontFamily: 'JetBrainsMono_500Medium',
  },



  uid: {
    marginLeft: 5,
    fontSize: 18,
    marginVertical: 4,
    marginHorizontal: 2,
    fontFamily: 'JetBrainsMono_500Medium',
    textAlign: 'left',
  },

  bio: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'JetBrainsMono_500Medium',
    marginHorizontal: 5,
  },



  linhahorizontalt: {
    width: 43,
    height: 60,
    border: 1,

  },
  nome: {
    fontSize: 25,


    fontFamily: 'JetBrainsMono_500Medium',

  }

});


const pessoas = [
  {
    uid: 159,
    nome: 'Danilo Soares',
    curso: 'Técnico de Informatica',
    periodo: 'Manhã',
    turma: 'TI10',
    gosto: 'Hardware,Front-end,Redes,PHP',
    bio: 'sou garoto de programa',
    img: require('./assets/danilo.jpg')
  },

  {
    uid: 69,
    nome: 'Daniel Lacerda',
    curso: 'Técnico de Informatica',
    periodo: 'Manhã',
    turma: 'TI10',
    gosto: 'Designer',
    bio: 'sou professor on-net, gosto muito de fazer gameplay',
    img: require('./assets/daniellacerda.jpg'),
  },

  {
    uid: 120,
    nome: 'Silvio fiorentino',
    curso: 'Técnico de Informatica',
    periodo: 'Manhã',
    turma: 'TI10',
    gosto: 'Banco de dados,PHP',
    bio: 'sou professor de programa',
    img: require('./assets/silvio.jpg'),
  },

  {
    uid: 420,
    nome: 'Bruno Galeazzo',
    curso: 'Tecnico de informatica',
    periodo: 'Manhã',
    turma: 'TI10m',
    gosto: 'Hardware, Redes',
    bio: 'mais novo membro da conferencia mundial de pods no banheiro ',
    img: require('./assets/burno.jpg'),
  },
  {
    uid: 10,
    nome: 'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img: require('./assets/washi.png'),
  },

  {
    uid: 157,
    nome: 'Cauãzinho chavão',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Livia, hosana, laura, Mol e casadas',
    bio: 'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
    img: require('./assets/caua.jpg')
  },

  {
    uid: 169,
    nome: 'Leonardo Mock',
    curso: 'Técnico Informatica',
    periodo: 'Manhã',
    turma: 'Ti08',
    gosto: 'Hardware,Front-end,Back-and',
    bio: 'Manuntenção não é de graça fica esperto',
    img: require('./assets/pepe.jpg'),

  }
]

