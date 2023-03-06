import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  Container,
  CardView,
  Icon,
  CardText,
  Text,
  ServiceText,
  ValueText,
  Date,
  Hour,
  ButtonText,
} from './Styles';

export interface Barber {
  id: string;
  name: string;
}

export default function CardSecondary({ data }: { data: Barber }) {
  return (
    <Container>
      <CardView>
        <Icon>
          <SimpleLineIcons name="user" size={24} color="#000" />
        </Icon>
        <CardText>
          <Text>{data.name}</Text>
        </CardText>
      </CardView>
      
      <CardView>
        <ServiceText>Corte Masculino</ServiceText>
        <ValueText>R$ 29,90</ValueText>
      </CardView>
      <CardView>
        <Date>
          <ButtonText>25/08/2020</ButtonText>
        </Date>
        <Hour>
          <ButtonText>13:00</ButtonText>
        </Hour>
      </CardView>
    </Container>
  );
}