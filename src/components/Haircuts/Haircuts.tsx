import React from "react";
import ButtonSecondary from "../../components/Form/ButtonSecondary/ButtonSecondary";
import {
  Container,
  HaircutsName,
  HaircutsType,
} from './Styles';

export interface Barber {
  id: string;
  nameHairCut: string;
  price: string;
}

export default function Haircuts({data}: {data: Barber}) {
  return (
    <Container>
      <HaircutsType>
        <HaircutsName>
          {data.nameHairCut}{"\n"}
          R$ {data.price}
        </HaircutsName>
        <ButtonSecondary textButton="Agendar" />
      </HaircutsType>
    </Container>
  );
}