import React from "react";

import {useState} from 'react';

// const Login =({navigation})=>{


//   const  [email,setEmail]=useState("");

//     const  [email,setEmail]=useState("");
   


// }

import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  flex,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Login = ({ navigation }) => {

     const  [email,setEmail]=useState("");

   const  [Password,setPassword]=useState("");
   
  const goToLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ backgroundColor: "#FAEBD7", display: flex, flex: 1 }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "grey",
              textAlign: "center",
              paddingTop: 10,
            }}
          >
            Login
          </Text>
        </View>

        <View>
          <TextInput

             onChangeText={( text)=>{setEmail()}}
            style={{


           
              borderColor: "white",
              borderWidth: 1,
              width: "80%",
              height: 50,
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 40,
              backgroundColor: "white",
              paddingLeft: 10,
            }}
            placeholder="Your Email"
          />
          <TextInput

           onChangeText={( text)=>{setPassword()}}
            style={{

              
              borderColor: "white",
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
        </View>
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
        <View>
          <AntDesign name="checkcircle" size={24} color="#68181cff" />
          <TouchableOpacity
            onPress={goToLogin }
            style={{
              width: "50%",
              height: 50,
              backgroundColor: "#68181cff",
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
      </View>
    </ScrollView>
  );
};

export default Login;
