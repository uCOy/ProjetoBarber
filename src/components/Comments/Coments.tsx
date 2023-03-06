import { View } from "react-native";
import React from "react";
import {
  Container,
  ContainerCard,
  Title,
  Description,
} from './Styles'

export default function Comments() {
  return (
    <Container>
      <ContainerCard>
        <View>
          <Title>Bonieky Lacerda</Title>
          <Description>
            Muito bom este cortador, muito educado e atencioso. Recomendo
            demais!
          </Description>
        </View>
      </ContainerCard>
    </Container>
  );
}