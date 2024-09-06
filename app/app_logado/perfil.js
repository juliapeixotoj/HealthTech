import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.meuperfil}>Meu perfil</Text>
      <Image style={styles.imgperfil} source={require('../../src/Ellipse 7.png')} />
      <Text style={styles.informacoes}>Informações pessoais</Text>
      <Text style={styles.nome}>Joana Magalhães Souza</Text>
      <Text style={styles.inf}>28/05/1990</Text>
      <Text style={styles.inf}>São Paulo - SP</Text>
      <View style={styles.linha}></View>
      <Text style={styles.informacoes}>Histórico médico</Text>
      <Text style={styles.med}>• Bronquite</Text>
      <Text style={styles.med}>• Sinusite</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
  },
  imgperfil: {
    marginTop: 20,
    textAlign: 'center',
    width: 100,
    height: 100,
  },
  meuperfil: {
    color: '#339CFF',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  informacoes: {
    color: '#339CFF',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 25,
    marginTop: 50,
    fontWeight: 'bold',
  },
  nome: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inf: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 15,
  },
  linha: {
    height:1,
    backgroundColor:"#CCC",
    width:"80%",
    marginVertical:10,
    marginTop: 50,
    marginBottom: 20,
  },
  med: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',  
  },
});