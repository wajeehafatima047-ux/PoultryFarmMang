import React from "react";

import { Text, View, flex, Image, ScrollView } from "react-native";

const Categories = ({ navigation }) => {
  const goToCategories = () => {
    navigation.navigate("Categories");
  };

  return (
    <ScrollView style={{ height:"100%"}}>
      <View
        style={{
          backgroundColor: "#FAEBD7",
          display: flex,
          flex: 1,
          width: "90%",
        }}
      >
        <View style={{ backgroundColor: "#FAEBD7", display: flex }}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Categories
          </Text>

          <View
            style={{
              display: flex,
              flexDirection: "row",
              padding: 20,
              margin: 20,
            }}
          >
            <Image
              style={{ Color: "#FAEBD7", padding: 50, margin: 20 }}
              source={require("../../assets/images/chicken1.png")}
            />
            <Image
              style={{ Color: "#FAEBD7", padding: 50, margin: 20 }}
              source={require("../../assets/images/chicken3.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Categories;
