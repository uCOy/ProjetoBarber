import styled from 'styled-components/native';
import {
  ActivityIndicator, 
  Image
} from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: "#282c31";
  justify-content: "center";
  align-items: "center";
`;

export const ImageAssets = styled(Image)`
  width: 222px;
  height: 222px;
  margin: 35px;
  align-items: "center";
  justify-content: "center";
`;

export const Text = styled.Text`
  color: "#fff";
  font-size: 20px;
  margin-top: 40px;
`;

export const Loading = styled(ActivityIndicator)`
  margin-top: 60px;
`;
