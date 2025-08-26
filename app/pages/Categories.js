import React from "react";

import { Text, View, flex, Image } from "react-native";

const Categories = ({ navigation }) => {
  const goToCategories = () => {
    navigation.navigate("Categories");
  };

  return (
    <View style={{ backgroundColor: "#FAEBD7", display: flex }}>
      <Text>Categories</Text>

      <View
        style={{ display: flex, flexDirection: "row", padding: 20, margin: 20 }}
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
  );
};

export default Categories;
