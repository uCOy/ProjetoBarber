import styled from 'styled-components/native';
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: "100%";
  margin-top: 70px;
  justify-content: "flex-end";
  background-color: "#fff";
  border-top-left-radius: 50px;
`;

export const CardView = styled.View`
  justify-content: "space-between";
  flex-direction: "row";
`;

export const BarberName = styled.Text`
  font-size: 18px;
  font-weight: "bold";
  margin-left: 18px;
  margin-top: 23px;
`;

export const Icon = styled.View`
  width: 110px;
  height: 110px;
  background-color: "#E7E7E7";
  margin-left: 27px;
  border-radius: 20px;
  margin-top: -30px;
  index: 1;
`;

export const CircleHeart = styled.View`
  width: 40px;
  margin-top: -18px;
  height: 40px;
  margin-right: 20px;
  border-radius: 180px;
  background-color: "#E7E7E7";
  box-shadow: 3px 3px "#E7E7E7";
  /* box-shadow: "3"; */
  /* box-shadow-color: "#E7E7E7"; */
`;

export const Heart = styled(Feather)`
  margin-top: 8px;
  margin-left: 8px;
`;

export const ServicesTitle = styled.Text`
  margin-top: 30px;
  font-size: 18px;
  margin-left: 29px;
  font-weight: "bold";
`;

// export const HaircutsName = styled.Text`
//   font-size: 16px;
//   margin-left: 29px;
//   margin-top: 30px;
//   font-weight: "bold";
// `;

// export const HaircutsType = styled.View`
//   flex-direction: "row";
//   justify-content: "space-between";
// `;

// export const TitleButton = styled.View`
//   color: "#fff";
//   text-align: "center";
//   font-weight: "bold";
// `;

export const ServicesScroll = styled.ScrollView`
  max-height: 350px;
`;
