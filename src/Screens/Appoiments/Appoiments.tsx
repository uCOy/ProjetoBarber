import {
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Form/Card/Card";
import Button from "../../components/Form/Button/Button";
import { horario } from "../../components/Hours/Hours";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  CardView,
  HaircutText,
  Title,
  CardCalender,
  TextDate,
  TimeContainer,
  ButtonCalender,
  TimeList,
  TextTime,
  Selected,
} from './Styles'

export const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 50;

export default function Appoiments() {
  const data = {
    id: "1",
    name: "Barbeiro 1",
  };

  const navigation = useNavigation();

  const [isSelected, setSelected] = useState();
  const [inicio, setInicio] = useState("");

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const slide = () => {
    Animated.timing(position, {
      toValue: { x: 0, y: -80 },
      delay: 200,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isSelected && date) {
      fadeIn(), slide();
    }
  });

  const addTime = (value, inicio) => {
    setSelected(value);
    setInicio(inicio);
  };

  return (
    <Container>
      <Card data={data} />
      <CardView>
        <HaircutText>Corte Masculino</HaircutText>
        <HaircutText>R$ 29,90</HaircutText>
      </CardView>
      <Title>Selecione uma data</Title>
      <CardCalender>
        <ButtonCalender
          onPress={showDatePicker}
        >
          {/* <Text style={styles.textDate}>
            {date === ""
              ? "Escolha uma data"
              : date.toString().substring(4, 15)}
          </Text> */}
          <TextDate>{inicio}</TextDate>
        </ButtonCalender>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="pt-BR"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date(2022, 0, 1)}
        />
      </CardCalender>
      <Title>Escolha um horário</Title>
      <TimeList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={horario}
        renderItem={({ item }) => (
          <TimeContainer
            onPress={() => addTime(item.id, item.inicio)}
          >
            <Selected
              style={item.id === isSelected ? styles.selected : styles.textTime}
            >
              {item.inicio}-{item.final}
            </Selected>
            <View>
              <TextTime style={styles.textTime}>Disponível</TextTime>
            </View>
          </TimeContainer>
        )}
      />
      <Animated.View
        style={{
          height: 80,
          width: "100%",
          justifyContent: "flex-start",
          position: "absolute",
          bottom: -80,
          alignItems: "center",
          alignSelf: "center",
          opacity: fadeAnim,
          transform: [{ translateX: position.x }, { translateY: position.y }],
        }}
      >
        <Button onPress={() => navigation.navigate("AppoimentsConfirm")} textButton="Confirmar" />
      </Animated.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  selected:{
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 130, 
  },
  textTime:{
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 130,  
  }
})