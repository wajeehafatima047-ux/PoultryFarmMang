import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useDispatch } from "react-redux";
import { handleSignUp } from "../Helper/firebaseHelper";
import { setUser } from "../redux/Slices/HomeDataSlice";

const Signup = ({ navigation }) => {
  const [Name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Phone, setPhone] = useState("");

  const [Country, setCountry] = useState("");

  const [Farm, setFarm] = useState("");

  const [Village, setVillage] = useState("");

  const [State, setState] = useState("");

  const [City, setCity] = useState("");
  const dispatch = useDispatch();

  const goToLogin = async () => {
    const user = await handleSignUp(email, password, {
      role: "Customer",
    Name,email,password,Phone,Country,Farm,Village,State,City
    });

    if (user?.uid) {
      dispatch(setRole("Customer"));
      dispatch(setUser(user));
    } else {
      alert("Error in sign up");
    }
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ flex: 1, color: "GREY", backgroundColor: "#FAEBD7" }}>
        <Text
          style={{
            fontSize: 20,
            color: "grey",
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          Create Account
        </Text>
        <TextInput
          onChangeText={(e) => {
            setName(e);
          }}
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
          onChangeText={(num) => {
            setPhone(num);
          }}
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
          onChangeText={(text) => {
            setEmail(text);
          }}
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
          onChangeText={(text) => {
            setPassword(text);
          }}
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

        <TextInput
          onChangeText={(text) => {
            setFarm(text);
          }}
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
          placeholder="Farm name"
        />
        <TextInput
          onChangeText={(text) => {
            setCountry(text);
          }}
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
          placeholder="country"
        />

        <TextInput
          onChangeText={(text) => {
            setState(text);
          }}
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
          placeholder="State"
        />

        <TextInput
          onChangeText={(text) => {
            setCity(text);
          }}
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
          placeholder="City"
        />

        <TextInput
          onChangeText={(text) => {
            setVillage(text);
          }}
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
          placeholder="Village name"
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







