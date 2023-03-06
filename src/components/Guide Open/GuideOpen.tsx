import React from "react";
import {
  View,
  FlatList,
} from "react-native";
import Haircuts from "../../components/Haircuts/Haircuts";
import Comments from "../Comments/Coments";
// import { horario } from "../Hours/Hours";
// import Barber2 from "../../Screens/Barbeiro.v2/BarberV2";
import {
  Container,
  CardView,
  BarberName,
  Icon,
  CircleHeart,
  Heart,
  ServicesTitle,
  // HaircutsName,
  // HaircutsType,
  // TitleButton,
  ServicesScroll,
} from './Styles'

export interface Barber {
  id: string;
  name: string;
}

export default function GuideOpen({ data }: { data: Barber }) {
  const DATA = [
    {
      id: "1",
      price: "25,00",
      nameHairCut: "Corte Masculino",
    },
    {
      id: "2",
      price: "30,00",
      nameHairCut: "Alisamento",
    },
    {
      id: "3",
      price: "40,00",
      nameHairCut: "Barba",
    },
    {
      id: "4",
      price: "10,00",
      nameHairCut: "Sobrancelha",
    },
    {
      id: "5",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
    {
      id: "6",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
    {
      id: "7",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
    {
      id: "8",
      price: "10,00",
      nameHairCut: "Pezinho",
    },
  ];

  return (
    <Container>
      <CardView>
        <Icon></Icon>
        <BarberName>{data.name}</BarberName>
        <CircleHeart>
          <Heart name="heart" size={24} color="black" />
        </CircleHeart>
      </CardView>
      <View>
        <ServicesTitle>Lista de Serviços</ServicesTitle>
      </View>
      <View>
        <ServicesScroll
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Haircuts data={item} />}
            keyExtractor={(item) => item.id}
          />
        </ServicesScroll>
      </View>
        <Comments />
    </Container>
  );
}