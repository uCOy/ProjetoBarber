import React, { Component } from "react";
import {
  Container,
  TitleButton,
} from './Styles';

type Props = {
  textButton: string;
};
  
export default function ButtonSecondary({ textButton }: Props) {
  return (
    <Container>
      <TitleButton>{textButton}</TitleButton>
    </Container>
  );
}
  

  