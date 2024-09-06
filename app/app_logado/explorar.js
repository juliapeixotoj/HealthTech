import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.quadro}>
        <TextInput
          style={styles.inputemail}
          placeholder="Digite a especialidade"
          placeholderTextColor="#A9A9A9"
        />
        <TextInput
          style={styles.inputlocalizacao}
          placeholder="Digite sua localização"
          placeholderTextColor="#A9A9A9"
        />
        <Link href={'/app_logado/explorar'} style={styles.botao1}>
          Buscar
        </Link>
      </View>
      <Text style={styles.resultado}>Resultado da busca</Text>
      <View style={styles.todo}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Link href={'/app_logado/explorar'} style={styles.botao2}>Agendar consulta</Link>
        </View>
      </View>
      <View style={styles.todo}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Link href={'/app_logado/explorar'} style={styles.botao2}>Agendar consulta</Link>
        </View>
      </View>
      <View style={styles.todo}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Link href={'/app_logado/explorar'} style={styles.botao2}>Agendar consulta</Link>
        </View>
      </View>
      <View style={styles.todo}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Link href={'/app_logado/explorar'} style={styles.botao2}>Agendar consulta</Link>
        </View>
      </View>
      <View style={styles.todo}>
        <View>
            <Image style={styles.img} source={require('../../src/Ellipse 4.png')}/>
        </View>
        <View>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.funcao}>Angiologista</Text>
            <Link href={'/app_logado/explorar'} style={styles.botao2}>Agendar consulta</Link>
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
  botao1: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: '#0B3B60',
    padding: 20,
    borderRadius: 10,
    width: 300,
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
    marginTop: 10,
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
    marginTop: 25,
    marginLeft: -130,
    height: 65,

  },
  img: {
    marginLeft: 90,
    marginTop: 15,
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
    marginBottom: 25,
  },
  inputemail: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  inputlocalizacao: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  quadro: {
    height: 250,
    width: 350,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 25,
    color: '#339CFF',
    marginTop: 40,
    marginBottom: 30,
    fontWeight: 'bold',
  },
});