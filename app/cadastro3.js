import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';


export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Amil', 'Biosaúde', 'Biovida', 'Bradesco', 'Sulamerica', 'Unimed', 'Outros', 'Não tenho Plano'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo 1.png')} />
      <Text style={styles.login}>Para finalizar, qual seu</Text>
      <Text style={styles.login2}>Plano de saúde?</Text>
      <View style={styles.caixas}>
        <Text style={{fontSize: 18, color: '#0B3B60', fontWeight: 'bold'}}>Selecione o plano:</Text>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionContainer}
                        onPress={() => setSelectedOption(option)}
                    >
                        <View style={styles.checkboxContainer}>
                            {selectedOption === option && <View style={styles.selectedCheckbox} />}
                        </View>
                        <Text style={styles.checkboxText}>{option}</Text>
                    </TouchableOpacity>
                ))}
        </View>
      <Link href={'/cadastro2'} style={styles.botao2}>Voltar</Link>
      <Link href={'/app_logado'} style={styles.botao1}>Cadastrar!</Link>
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
  login2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    },
    checkboxContainer: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: '#0B3B60',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedCheckbox: {
        height: 12,
        width: 12,
        backgroundColor: '#0B3B60',
    },
    checkboxText: {
        fontSize: 16,
        color: '#0B3B60',
    },
    caixas: {
        alignItems: 'left',
        marginRight: 100,
        marginBottom: 20,
    }
});