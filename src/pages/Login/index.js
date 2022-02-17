import React, { useState, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText} from './styles';

import * as Animatable from 'react-native-animatable';

const TitleAnimated = Animatable.createAnimatableComponent(Title);


export default function Login() {
  const { signIn, signUp, loadingAuth } = useContext(AuthContext);

  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin(){
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin(){
    if(email === '' || password === ''){
      console.log('Preencha todos os campos!');
      return;
    }

    signIn(email, password);
  }

  function handleSignUp(){
    if(name === '' || email === '' || password === ''){
      console.log('Preencha todos os campos!');
      return;  
    }

    //Cadastrando usuario!
    signUp(email, password, name);
  }


  if(login){
    return(
    <Container>
      <TitleAnimated animation="flipInY" >
        <Text style={{ color: '#f08080' }}>BLOG</Text>
        <Text style={{ color: '#48d1cc' }}>DETODAS</Text>
      </TitleAnimated>

      <Input
      placeholder="E-mail"
      value={email}
      onChangeText={ (text) => setEmail(text) }
      />
      <Input
      placeholder="******"
      secureTextEntry={true}
      value={password}
      onChangeText={ (text) => setPassword(text) }
      />

      <Button onPress={handleLogin}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <ButtonText>Acessar</ButtonText>
          )
        }
      </Button>

      <SignUpButton onPress={ () => toggleLogin() }>
        <SignUpText>Criar uma conta.</SignUpText>
      </SignUpButton>
    </Container> 
    )
  }

 return (
  <Container>
    <TitleAnimated animation="fadeInDown">
      <Text style={{ color: '#f08080' }}>BLOG</Text>
      <Text style={{ color: '#48d1cc' }}>DETODAS</Text>
    </TitleAnimated>

    <Input
      placeholder="Nome de Usuário"
      value={name}
      onChangeText={(text) => setName(text)}
    />
    <Input
      placeholder="E-mail"
      value={email}
      onChangeText={ (text) => setEmail(text) }
    />
    <Input
      placeholder="******"
      secureTextEntry={true}
      value={password}
      onChangeText={ (text) => setPassword(text) }
    />

    <Button onPress={handleSignUp}>
      {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <ButtonText>Cadastrar</ButtonText>
          )
      }
    </Button>

    <SignUpButton onPress={ () => toggleLogin() }>
      <SignUpText>Já tenho uma conta.</SignUpText>
    </SignUpButton>
  </Container> 
  );
}