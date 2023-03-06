import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: "#282C31";
`;

export const Title = styled.Text`
  color: "#fff";
  font-weight: "bold";
  font-size: 24px;
  margin-left: 5px;
  margin-top: 3px;
  margin-right: 220px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  padding: 6px;
  margin-top: 31px;
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
`;

export const Arrow = styled(Feather)`
  margin-left: 7px;
`;

export const CardView = styled.View`
  flex: 1;
  justify-content: "center";
  align-items: "center";
`;
