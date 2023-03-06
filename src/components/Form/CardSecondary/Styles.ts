import styled from "styled-components/native";

export const Container = styled.View`
  width: 365;
  height: 167;
  padding: 10;
  background-color: "#fff";
  border-radius: 20;
  margin-bottom: 20;
`;

export const CardView = styled.View`
  justify-content: "space-between";
  flex-direction: "row";
`;

export const Icon = styled.View`
  width: 56;
  height: 56;
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
  color: "#000";
  font-size: 17;
  font-weight: "bold";
  margin-bottom: 11;
`;

export const ServiceText = styled.Text`
  font-size: 16;
  font-weight: "bold";
  margin-top: 11;
`;

export const ValueText = styled.Text`
  font-size: 16;
  font-weight: "bold";
  margin-top: 11;
`;

export const Date = styled.TouchableOpacity`
  width: 121;
  height: 42;
  background-color: "#4D4D4D";
  border-radius: 10;
  margin-top: 11;
  justify-content: "center";
`;

export const Hour = styled.TouchableOpacity`
  width: 77;
  height: 42;
  background-color: "#4D4D4D";
  border-radius: 10;
  padding-top: 8;
  margin-top: 11;
`;

export const ButtonText = styled.Text`
  justify-content: "center";
  align-items: "center";
  text-align: "center";
  margin-top: 4;
  color: "#fff";
  font-weight: "bold";
`;