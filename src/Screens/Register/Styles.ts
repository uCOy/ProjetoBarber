import styled from 'styled-components/native';
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: "#282c31";
  justify-content: "center";
  align-items: "center";
`;

export const Input = styled.View`
  width: 300px;
  height: 60px;
  padding: 18px;
  margin: 11px;
  border-radius: 30px;
  justify-content: "space-between";
  flex-direction: "row";
  align-items: "center";
  background-color: "#4D4D4D";
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: "#fff";
  margin-left: 15px;
`;

export const Title = styled.Text`
  color: "#fff";
  text-align: "center";
  padding: 2px;
`;

export const ButtonRegister = styled(TouchableOpacity)`
  flex-direction: "row";
`;

export const IconMaterial = styled(MaterialIcons)`

`;

export const IconFont = styled(FontAwesome5)`

`;

export const TitleRegister = styled.View`
  color: "#fff";
  text-align: "center";
  font-weight: "bold";
  padding: 2px;
`;

export const AlignTitle = styled(ScrollView)`
  flex-direction: "row";
  margin-top: 62;
`;

export const ImageAssets = styled(Image)`
  width: 222px;
  height: 222px;
  margin: 30px;
  align-items: "center";
  justify-content: "center";
`;