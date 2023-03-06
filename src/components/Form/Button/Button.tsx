import React from "react";
import {
  Container,
  TitleButton,
} from './Styles'

type Props = {
  textButton: string;
  onPress: () => void;
};

export default function Button({ textButton, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <TitleButton>{textButton}</TitleButton>
    </Container>
  );
}
