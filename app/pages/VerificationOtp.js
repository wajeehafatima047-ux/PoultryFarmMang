import React from "react";

import { View, Text, ScrollView, flex ,Keyboard} from "react-native";

import { OtpInput } from "react-native-otp-entry";
const VerificationOtp = ({ navigation }) => {
  const goToVerificationOtp = () => {
    navigation.navigate("VerificationOtp");
  };
  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          display: flex,
          flex: 1,
          width: "90%",
          backgroundColor: "#FAEBD7",
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          {" "}
          Verify your Phone Number
        </Text>

        <Text style={{ color: "grey", textAlign: "center" }}>
          Enter Your OTP here
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "green",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <View
            style={{
              width: 40,
              backgroundColor: "grey",
              height: 40,
              borderRadius: 20,
              margin: 10,
              borderColor: "red",
            }}
          ></View>

          <View
            style={{
              width: 40,
              backgroundColor: "grey",
              height: 40,
              margin: 10,
              borderRadius: 20,
            }}
          ></View>

          <View
            style={{
              width: 40,
              backgroundColor: "grey",
              height: 40,
              margin: 10,
              borderRadius: 20,
              borderColor: "#68181cff",
            }}
          ></View>

          <View
            style={{
              width: 40,
              backgroundColor: "grey",
              height: 40,
              margin: 10,
              borderRadius: 20,
            }}
          ></View> */}


          <OtpInput
  numberOfDigits={4}
  focusColor="green"
  focusStickBlinkingDuration={500}
  onTextChange={(text) => console.log(text)}
  onFilled={(text) => Keyboard.dismiss()}
  textInputProps={{
    accessibilityLabel: 'One-Time Password',
  }}
  theme={{
    containerStyle: {
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pinCodeContainerStyle: {
      width: 50,
      height: 50,
      margin: 5,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#000', // Colors.black
      alignItems: 'center',
      justifyContent: 'center',
    },
    pinCodeTextStyle: {
      fontSize: 18,
      color: '#000', // Colors.black
    },
    focusStickStyle: {
      height: 4,
      width: 50,
      backgroundColor: '#4CAF50', // Colors.pacepal_main_green
    },
    focusedPinCodeContainerStyle: {
      borderColor: '#4CAF50', // Colors.pacepal_main_green
    },
  }}
/>




        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={{ color: "grey" }}> Didn't receive any code</Text>

          <Text style={{ color: "#68181cff", fontWeight: "bold" }}>
            Resend New Code
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerificationOtp;
