import React from "react";

import { Text, View, Image, flex, ScrollView } from "react-native";

const Cart = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          backgroundColor: "#FAEBD7",
          width: "90%",
          display: "flex",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 40 }}> YOUR CART</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{ margin: 20, padding: 10, height: 100, width: 100 }}
            source={require("../../assets/images/chicken3.png")}
          />
          <Text style={{ fontSize: 30 }}>
            {" "}
            Cheaper Than Beef And Protein Provider{" "}
          </Text>
        </View>

        <View style={{ display: flex, flexDirection: "column", padding: 10 }}>
          <Text style={{ color: "grey", padding: 10, flexDirection: "column" }}>
            {" "}
            QTY:1
          </Text>

          <Text>Skinless | Medium cuts |with Bone</Text>
          <View
            style={{ height: 1, width: "80%", backgroundColor: "red" }}
          ></View>

          <View style={{ display: flex, flexDirection: "row", margin: 50 }}>
            <Text>Rs. 700</Text>

            <Text style={{ backgroundColor: "red", height: 30, width: 40 }}>
              - 1 +
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Cart;
