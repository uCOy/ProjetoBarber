import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Button from "../../components/Form/Button/Button";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Input,
  InputText,
  IconFont,
  IconMaterial,
  AlignTitle,
  Title,
  TitleRegister,
  ImageAssets,
  ButtonRegister,
} from './Styles'
  
export default function Register() {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageAssets
        source={require("../../assets/imgs/logo/logotipo-personalizada-barbearia-arte-digital-teso-app.png")}
      />
    <Input>
      <IconFont name="user-alt" size={24} color="#fff" />
        <InputText
          placeholder="Digite seu nome"
          placeholderTextColor="#fff"
        />
    </Input>
    <Input>
      <IconMaterial name="email" size={24} color="#fff" />
        <InputText
          placeholder="Digite seu e-mail"
          placeholderTextColor="#fff"
        />
      </Input>
    <Input>
      <IconMaterial name="lock" size={24} color="#fff" />
        <InputText
          placeholder="Digite sua senha"
          placeholderTextColor="#fff"
          secureTextEntry={true}
        />
      </Input>
      <Button onPress={() => navigation.navigate("Login")} textButton="CADASTRAR"/>
      <AlignTitle>
        <ButtonRegister onPress={() => navigation.navigate("Login")}>
          <Title>Já possui conta?</Title>
          <TitleRegister>Faça seu login</TitleRegister>
        </ButtonRegister>
      </AlignTitle>
    </Container>
  );
} 