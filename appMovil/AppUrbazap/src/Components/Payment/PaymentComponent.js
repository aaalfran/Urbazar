import React, {useState} from "react";
import {TextInput} from "react-native";
import Svg from "react-native-svg";
import { HStack, View} from 'native-base';

import {usePaymentInputs} from "react-native-payment-inputs";
 
export default function App() {

  const styles = {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    width: "100%",
    padding: 10,
    borderRadius: 5
  }
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const {
    getCardNumberProps,
    getCardImageProps,
    getExpiryProps,
    getCvcProps,
    meta: {
      cardType,
      erroredInputs,
      touchedInputs,
    },
  } = usePaymentInputs();
  return (
    <View style={styles}>
    <HStack space={3} alignItems="center">
      <Svg
        style={{width: 50, height: 30}}
        {...getCardImageProps()}
      />
      <TextInput
        {...getCardNumberProps({
          onChangeText: setCardNumber,
          value: cardNumber,
          placeholder:"Número de tarjeta"
          /* ...extras go here */
        })}
      />
      <TextInput
        {...getExpiryProps({
          onChangeText: setExpiry,
          value: expiry,
          placeholder:"MM/DD"
        })}
      />
      <TextInput
        {...getCvcProps({
          onChangeText: setCvc,
          value: cvc,
        })}
      />
    </HStack>
    </View>
  );
}
