import React from "react";
import { Text, View, Image, flex, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Feather from "@expo/vector-icons/Feather";

import Ionicons from "@expo/vector-icons/Ionicons";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


const Home = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");


  };
  return (


    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          backgroundColor: "#FAEBD7",
          display: flex,
          flex: 1,
          width: "90%",

            
        }}
      >
        <View   >
          <FontAwesome name="sliders" size={24} color="grey" />

          <Text style={{ textAlign: "center", color: "#8B1E23", fontSize: 20 ,fontWeight:"bold"}}>
            Poultry Pro Flock Managment
          </Text>


            <Ionicons name="person-circle-outline" size={24} color="grey"  flexDirection="row" />

          <Text style={{ alignSelf:"center",textAlign: "center", color: "black", fontSize: 20,fontWeight:"bold" }}>
            {" "}
            Category
          </Text>
        
        
        </View>


{/*         
        {/* <View
          style={{
            display: flex,
            flexDirection: "row",
            backgroundColor: "#FAEBD7",
            margin: 20,

            alignItems:"center"
          }} */}
      

          <Image
            style={{ margin: 20, padding: 10, height: 70, width: 70 }}
            source={require("../../assets/images/chicken5.png")}
          />
          <Image
            style={{ margin: 20, padding: 10, height: 70, width: 70 }}
            source={require("../../assets/images/chicken6.png")}
          />

  </View>

        {/* </View> */}

        <View
          style={{
            display: flex,
            flexDirection: "row",
            backgroundColor: "#FAEBD7",
            margin: 20,
          }}
        >        <View style={{ display: flex, flexDirection: "row", width: "90%",alignItems:"center" }}>

          <Image
            style={{
              color: "#FAEBD7",
              margin: 20,
              padding: 10,
              height: 70,
              width: 70,
            }}
            source={require("../../assets/images/chicken3.png")}
          />
          <Image
            style={{
              color: "#FAEBD7",
              margin: 20,
              padding: 10,
              height: 70,
              width: 70,
            }}
            source={require("../../assets/images/chicken4.png")}
          />
        </View>

        {/* <View
          style={{
            display: flex,
            flexDirection: "row",
            margin: 20,
            padding: 22,
          }}
        >
          <View style={{ display: flex, flexDirection: "column" }}>
            <AntDesign name="home" size={24} color="grey" margin="50" />
            <Text style={{ color: "grey" }}>home</Text>
          </View>

          <View style={{ display: flex, flexDirection: "column" }}>
            <MaterialIcons name="category" size={24} color="grey" />

            <Text style={{ color: "grey" }}>Category</Text>
          </View>

          <View style={{ display: flex, flexDirection: "column" }}>
            <Feather name="shopping-cart" size={24} color="grey" />
            <Text style={{ color: "grey" }}>Cart</Text>
          </View>

          <View style={{ display: flex, flexDirection: "column" }}>
            <FontAwesome6 name="person" size={24} color="grey" />

            <Text style={{ color: "grey" }}>Profile</Text>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;
