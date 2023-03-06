import {
  TouchableOpacity,
} from "react-native";
import React from "react";
import GuideOpen from "../../components/Guide Open/GuideOpen";
import {
  Container,
  CardView,
  Header,
  Icon,
} from './Styles'

  const data = {
    id: "1",
    name: "Barbeiro 1",
  };

export default function Barber2() {
  return (
    <Container>
      <Header>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </Header>
      <CardView>
        <GuideOpen data={data}/>
      </CardView>
    </Container>
  );
}
