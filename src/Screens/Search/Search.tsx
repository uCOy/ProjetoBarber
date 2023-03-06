import React from "react";
import Card from "../../components/Form/Card/Card";
import Menu from "../../components/Menu/Menu";
import {
  Container,
  Header,
  Button,
  Icon,
  Input,
  Text,
  CardView,
  CardScroll,
  CardList,
} from './Styles'

export default function Search() {
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
        <Button>
          <Icon name="arrow-left" size={32} color="white" />
        </Button>
        <Input>
          <Text
            placeholder="Onde você está?"
            placeholderTextColor="#fff"
          />
        </Input>
      </Header>
      <CardView>
        <CardScroll showsVerticalScrollIndicator={false}>
          <CardList
            data={DATA}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
          />
        </CardScroll>
      </CardView>
      <Menu />
    </Container>
  );
}
