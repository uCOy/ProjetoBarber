import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View({
  paddingHorizontal: 26,
})`
  justify-content: 'center';
  align-items: "center";
  width: "100%";
  height: 56px;
  background-color: "#4D4D4D";
  flex-direction: "row";
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: 'center';
  align-items: "center";
  margin-right: 16px;
`;

export const Icon = styled.Text`
  margin-left: 20px;
`;

export const Icons = styled(AntDesign)`

`;

export const Calendar = styled.TouchableOpacity`
  justify-content: 'center';
  align-items: "center";
  width: 56px;
  height: 56px;
`;

export const CalendarIcon = styled(AntDesign)`
  justify-content: 'center';
  align-items: "center";
  width: 56px;
  height: 56px;
`;

export const IconArea = styled.View`
  justify-content: 'center';
  align-items: "center";
`;
