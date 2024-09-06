import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.imglogo} source={require('../../src/Logo2.png')} />
      <Text style={styles.boasvindas}>Boas-vindas!</Text>
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
        <Link href={'/app_logado/consultas'} style={styles.botao1}>
          Buscar
        </Link>
      </View>
      <View>
        <Text style={styles.depoimentos}>Depoimentos</Text>
        <Text style={styles.texto1}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </Text>
        <Text style={styles.pessoa1}>Júlio, 40 anos, São Paulo/SP.</Text>
      </View>
      <View style={styles.linha}></View>
      <View>
        <Text style={styles.texto2}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        </Text>
        <Text style={styles.pessoa1}>Júlio, 40 anos, São Paulo/SP.</Text>
      </View>
      <View style={styles.linha}></View>
      <View>
        <Text style={styles.texto2}>
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
        </Text>
        <Text style={styles.pessoa1}>Júlio, 40 anos, São Paulo/SP.</Text>
      </View>
      <View style={styles.linha}></View>
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
  imglogo: {
    marginTop: 20,
    marginRight: 200,
  },
  boasvindas: {
    color: '#339CFF',
    marginRight: 200,
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
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
  depoimentos: {
    textAlign: 'center',
    fontSize: 20,
    color: '#0B3B60',
    marginTop: 30,
    fontWeight: 'bold',
  },
  texto1: {
    textAlign: 'left',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  pessoa1: {
    textAlign: 'center',
    color: '#6B6E71',
    marginTop: 15,
    fontWeight: 'bold',
  },
  linha: {
    height:1,
    backgroundColor:"#CCC",
    width:"100%",
    marginVertical:10,
    marginTop: 20,
    marginBottom: 20,
  },
  texto2: {
    textAlign: 'left',
    marginLeft: 30,
    marginRight: 30,
  },
});