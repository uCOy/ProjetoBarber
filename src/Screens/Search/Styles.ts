import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";
import {
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: "#282C31";
`;

export const Title = styled.View`
  color: "#fff";
  font-Weight: "bold";
  font-size: 24px;
`;

export const Header = styled.View`
  padding: 32px;
  margin-top: 31px;
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
`;

export const Button = styled(TouchableOpacity)`

`;

export const Icon = styled(Feather)`

`;

export const Input = styled.View`
  width: 290px;
  height: 52px;
  padding: 18px;
  margin-left: 7px;
  border-radius: 30px;
  justify-content: "space-between";
  flex-direction: "row";
  align-items: "center";
  background-color: "#4D4D4D";
  flex: 1;
  color: '#FFF';
  font-size: 16px;
`;

export const Text = styled(TextInput)`

`;

export const CardView = styled.View`
  flex: 1;
  justify-content: "center";
  align-items: "center";
`;

export const CardScroll = styled(ScrollView)`

`;

export const CardList = styled(FlatList)`

`;
