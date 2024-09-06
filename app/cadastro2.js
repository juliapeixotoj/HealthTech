import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';


export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo 1.png')} />
      <Text style={styles.login}>Agora mais alguns dados</Text>
      <Text style={styles.login}>sobre você:</Text>
      <Text style={styles.campo}>CEP</Text>
      <TextInput style={styles.inputemail} placeholder="Insira seu CEP" placeholderTextColor="#A9A9A9"
      />
      <Text style={styles.campo}>Endereço</Text>
      <TextInput style={styles.inputemail} placeholder="Insira seu endereço" placeholderTextColor="#A9A9A9"
      />
      <Text style={styles.campo}>Número</Text>
      <TextInput style={styles.inputsenha} placeholder="Insira seu número" placeholderTextColor="#A9A9A9" secureTextEntry={true}
      />
      <Text style={styles.campo}>Complemento</Text>
      <TextInput style={styles.inputsenha} placeholder="Insira o complemento" placeholderTextColor="#A9A9A9" secureTextEntry={true}
      />
      <Text style={styles.campo}>Telefone</Text>
      <TextInput style={styles.inputsenha} placeholder="(00) 00000-0000" placeholderTextColor="#A9A9A9" secureTextEntry={true}
      />
      <Link href={'/cadastro1'} style={styles.botao2}>Voltar</Link>
      <Link href={'/cadastro3'} style={styles.botao1}>Avançar</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    marginTop: 0,

  },
  campo: {
    color: '#0B3B60',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 5,
    fontSize: 16,
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
    marginBottom: 15,
  },
  inputsenha: {
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
    marginBottom: 20,
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 0,
    color: '#6B6E71'
  },
  botao1: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: '#0B3B60',
    padding: 20,
    borderRadius: 10,
    width: '80%'
  },
  esqueceu: {
    fontSize: 16,
    color: '#0B3B60',
    textDecorationLine: 'underline',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botao2: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: '#90989F',
    padding: 20,
    borderRadius: 10,
    width: '80%'
  },
});