import { View } from "react-native";
import React from "react";
import {
  Container,
  Text,
  ImageAssets,
  Loading,
} from './Styles'

export default function Preload() {
  return (
    <Container>
      <ImageAssets
        source={require("../../assets/imgs/logo/logotipo-personalizada-barbearia-arte-digital-teso-app.png")}
      />
      <View>
        <Text>Aguarde...</Text>
      </View>
      <Loading size="large" color="#fff" />
    </Container>
  );
}
