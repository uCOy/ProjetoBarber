import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  Container,
  CardView,
  Icon,
  CardText,
  Text,
  Button,
  ButtonText,
} from './Styles';

export interface Barber {
  id: string;
  name: string;
}

export default function Card({data}: {data: Barber}) {
  return (
    <Container>
      <CardView>
        <Icon>
          <SimpleLineIcons name="user" size={24} color="#000" />
        </Icon>
        <CardText>
          <Text>{data.name}</Text>
          <Button>
            <ButtonText>Ver Perfil</ButtonText>
          </Button>
        </CardText>
      </CardView>
    </Container>
  );
}

