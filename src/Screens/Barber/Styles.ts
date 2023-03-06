import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: "#282C31";
`;

export const Icon = styled(Feather)`

`;

export const Header = styled.View`
  padding: 26px;
  margin-top: 21px;
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
`;

export const CardView = styled.View`
  justify-content: "center";
  align-items: "center";
`;