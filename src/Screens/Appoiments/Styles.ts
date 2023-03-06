import styled from 'styled-components/native';
import statusBarHeight from './Appoiments';

export const Container = styled.View({
  paddingTop: statusBarHeight,
})`
  flex: 1;
  background-color: "#282C31";
  justify-content: "flex-start";
  align-items: "center";
`;

export const CardView = styled.View`
  width: 328px;
  height: 57px;
  padding: 11px;
  margin-left: 60px;
  background-color: "#fff";
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
  border-radius: 20px;
`;

export const HaircutText = styled.Text`
  color: "#000";
  font-size: 17px;
  font-weight: "bold";
`;

export const Title = styled.Text`
  color: "#fff";
  font-size: 20px;
  font-weight: "bold";
  margin: 20px;
  text-align: "center";
`;

export const ButtonCalender = styled.TouchableOpacity({
  paddingHorizontal: 15,
})`
  height: 55px;
  border-bottom-width: 3px;
  border-color: "#fff";
  align-items: "center";
  justify-content: "space-between";
  flex-direction: "row";
  border-radius: 10px;
  background-color: "#f0f6fd";
`;

export const CardCalender = styled.View({
  paddingHorizontal: 40,
})`
  width: "100%";
`;

export const TimeList = styled.Flatlist({
  paddingHorizontal: 40,
})`
    width: "100%",
`;

export const TextDate = styled.Text`
  text-transform: "uppercase";
  font-weight: "bold";
  font-size: 14px;
  margin-left: 130px; 
`;

export const TimeContainer = styled.TouchableOpacity({
  paddingHorizontal: 20,
})`
  flex-direction: "row";
  justify-content: "space-between";
  align-items: "center";
  height: 50;
  background-color: "#fff";
  border-radius: 10;
  margin-bottom: 5;
`;

export const TextTime = styled.Text`

`;

export const Selected = styled.Text`

`;