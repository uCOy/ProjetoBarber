import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Button,
  Icon,
  Icons,
  Calendar,
  CalendarIcon,
  IconArea,
} from './Styles';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.navigate("Home")}>
        <Icon>
          <Icons name="home" size={32} color="#b18a3b" />
        </Icon>
      </Button>
      <Button onPress={() => navigation.navigate("Appoiments")}>
        <Icon>
          <Icons name="form" size={32} color="#fff" />
        </Icon>
      </Button>
      <Calendar onPress={() => navigation.navigate("Appoiments")}>
        <IconArea>
          <CalendarIcon name="calendar" size={32} color="#fff" />
        </IconArea>
      </Calendar>
      <Button onPress={() => navigation.navigate("favorites")}>
        <Icon>
          <Icons name="hearto" size={32} color="#fff" />
        </Icon>
      </Button>
      <Button onPress={() => navigation.navigate("Barber")}>
        <Icon>
          <Icons name="user" size={32} color="#fff" />
        </Icon>
      </Button>
    </Container>
  );
}