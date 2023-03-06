import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 328;
  height: 117;
  padding: 10;
  background-color: "#1b191b";
  justify-content: "center";
  align-items: "center";
  border-radius: 20;
  margin-bottom: 20;
`;

export const CardView = styled.View`
  justify-content: "space-between";
  flex-direction: "row";
`;

export const Icon = styled.View`
  width: 88;
  height: 88;
  justify-content: "center";
  align-items: "center";
  background-color: "#E7E7E7";
  border-radius: 20;
  margin-right: 26;
`;

export const CardText = styled.Text`
  flex: 1;
  justify-content: "center";
  flex-direction: "column";
`;

export const Text = styled.Text`
  color: "#fff";
  font-size: 17;
  font-weight: "bold";
  margin-bottom: 11;
`;

export const Button = styled.TouchableOpacity`
  width: 85;
  height: 26;
  border-width: 2;
  margin-top: 16;
  border-style: "solid";
  border-color: "#805F1D";
  border-radius: 10;
`;

export const ButtonText = styled.Text`
  justify-content: "center";
  align-items: "center";
  text-align: "center";
  padding: -6;
  color: "#fff"
`;