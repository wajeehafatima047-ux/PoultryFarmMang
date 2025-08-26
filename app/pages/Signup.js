import React from "react";
import { Text, TouchableOpacity, View, TextInput, ScrollView  } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Signup = ({ navigation }) => {
  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <ScrollView style={{height:"100%"}}>

  
    <View style={{ flex:1, color: "GREY", backgroundColor: "#FAEBD7" }}>


      <Text
        style={{
          fontSize: 20,
          color: "grey",
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        SignUp
      </Text>
      <TextInput
        style={{
          color: "GREY",
          borderColor: "#FAEBD7",
          borderWidth: 1,
          width: "80%",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 40,
          backgroundColor: "white",
          paddingLeft: 10,
        }}
        placeholder="Name"
      />
      <TextInput
        style={{
          color: "GREY",
          borderColor: "#FAEBD7",
          borderWidth: 1,
          width: "80%",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 40,
          backgroundColor: "white",
          paddingLeft: 10,
        }}
        placeholder=" Phone No"
      />
      <TextInput
        style={{
          color: "GREY",
          borderColor: "#FAEBD7",
          borderWidth: 1,
          width: "80%",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 40,
          backgroundColor: "white",
          paddingLeft: 10,
        }}
        placeholder="Email Adress"
      />
      <TextInput
        style={{
          color: "GREY",
          borderColor: "#FAEBD7",
          borderWidth: 1,
          width: "80%",
          height: 50,
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 40,
          backgroundColor: "white",
          paddingLeft: 10,
        }}
        placeholder="Password"
      />

      <View>
        <Text
          style={{
            fontSize: 12,
            color: "black",
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          I accept the terms and privacy policy
        </Text>
      </View>
      <AntDesign name="checkcircle" size={24} color="white" />
      <TouchableOpacity
        onPress={goToSignup}
        style={{
          width: "50%",
          height: 50,
          backgroundColor: "#8B1E23",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
  );
};

export default Signup;
