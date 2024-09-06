import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.boasvindas}>Minhas Consultas</Text>
        <Link href={'/app_logado/consultas'} style={styles.botao1}>
          Agendar outra consulta
        </Link>
      <Text style={styles.consultas}>Próximas consultas</Text>
      <View style={styles.todo}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Text style={styles.funcao}>03/03/2023</Text>
            <Link href={'/app_logado/consultas'} style={styles.botao2}>Cancelar</Link>
        </View>
      </View>
      <View style={styles.linha}></View>
      <Text style={styles.consulta}>Consultas passadas</Text>
      <View style={styles.todos}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Text style={styles.funcao}>01/02/2022</Text>
            <Link href={'/app_logado/consultas'} style={styles.botao3}>Agendar consulta</Link>
        </View>
      </View>
      <View style={styles.todos}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 5png.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dr. Paulo Matos</Text>
            <Text style={styles.funcao}>Otorrinolaringologista</Text>
            <Text style={styles.funcao}>09/08/2022</Text>
            <Link href={'/app_logado/consultas'} style={styles.botao3}>Agendar consulta</Link>
        </View>
      </View>
      <View style={styles.todos}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 6.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Mariana Luz</Text>
            <Text style={styles.funcao}>Mastologista</Text>
            <Text style={styles.funcao}>07/10/2022</Text>
            <Link href={'/app_logado/consultas'} style={styles.botao3}>Agendar consulta</Link>
        </View>
      </View>
     
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
  boasvindas: {
    color: '#339CFF',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  botao1: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: '#0B3B60',
    padding: 20,
    borderRadius: 20,
    width: 350,
    height: '6%'
  },
  consultas: {
    textAlign: 'left',
    fontSize: 20,
    color: '#339CFF',
    marginTop: 15,
    marginLeft: -160,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  consulta: {
    textAlign: 'left',
    fontSize: 20,
    color: '#339CFF',
    marginTop: 20,
    marginLeft: -160,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  todo: {
    alignItems: 'left',
    marginLeft: 0,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    width: 350,
    height: 180,
  },
  nome: {
    marginLeft: 10,
    fontSize: 15,
    color: '#6B6E71',
    marginTop: 15,
    fontWeight: 'bold',
  },
  funcao: {
    marginLeft: 10,
    color: '#6B6E71',
    marginTop: 3,
  },
  botao2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: '#0B3B60',
    padding: 20,
    borderRadius: 10,
    width: 300,
    marginTop: 20,
    marginLeft: -55,
    height: '35%'
  },
  img: {
    marginLeft: 15,
    marginTop: 15,
  },
  todos: {
    alignItems: 'left',
    marginLeft: 0,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    width: 350,
    height: 180,
    marginTop: 20,
    backgroundColor: '#C2E1FF',
  },
  botao3: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: '#0B3B60',
    padding: 20,
    borderRadius: 10,
    width: 300,
    marginTop: 20,
   marginLeft: -55,
    height: '35%'
  },
  linha: {
    height:1,
    backgroundColor:"#CCC",
    width:"85%",
    marginVertical:10,
    marginTop: 30,
  },
});