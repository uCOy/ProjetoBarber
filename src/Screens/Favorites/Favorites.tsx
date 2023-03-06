import {
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from "react";
import Card from "../../components/Form/Card/Card";
import Menu from "../../components/Menu/Menu";
import {
  Container,
  Title,
  Header,
  Arrow,
  CardView,
} from './Styles'

export default function Favorites() {
  const DATA = [
    {
      id: "1",
      name: "Michael Scott",
    },
    {
      id: "2",
      name: "Jim Halpert",
    },
    {
      id: "3",
      name: "Pam Beesly",
    },
    {
      id: "4",
      name: "Pam Beesly",
    },
    {
      id: "5",
      name: "Pam Beesly",
    },
  ];

  return (
    <Container>
      <Header>
      <TouchableOpacity>
        <Arrow name="arrow-left" size={32} color="white" />
      </TouchableOpacity>
        <Title>Favoritos</Title>
      </Header>
      <CardView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </CardView>
        <Menu />
    </Container>
  );
}