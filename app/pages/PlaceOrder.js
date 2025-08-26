import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const PlaceOrder = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const goToPlaceOrder = () => {
    navigation.navigate("PlaceOrder");
  };
  return (
    <View style={{ color: "grey", backgroundColor: "#FAEBD7" }}>
      <Text style={{ fontSize: 20, color: "grey", textAlign: "center" }}>
        Place Order
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          width: "80%",
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          paddingLeft: 10,
          color: "grey",
        }}
        placeholder="Email Address"
      />
      <TextInput
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          width: "80%",
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          paddingLeft: 10,
          color: "grey",
        }}
        placeholder="First Name"
      />
      <TextInput
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          width: "80%",
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          paddingLeft: 10,
          color: "grey",
        }}
        placeholder="Second Name"
      />
      <TextInput
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          width: "80%",
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          paddingLeft: 10,
          color: "grey",
        }}
        placeholder="Phone No."
      />
      <TextInput
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          width: "80%",
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          paddingLeft: 10,
          color: "grey",
        }}
        placeholder="Address"
      />

      <View style={{width:'80%'}}>
        <DropDownPicker
          open={open}
          placeholder="Category"
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
 
      <TextInput
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          width: "80%",
          height: 50,
          borderRadius: 10,
          marginTop: 40,
          paddingLeft: 10,
          color: "grey",
        }}
        placeholder="Quantity"
      />

      <View>
        <TouchableOpacity
          onPress={goToPlaceOrder}
          style={{
            width: "20%",
            height: 50,
            backgroundColor: "#8B1E23",
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 40,
            alignSelf: "center",
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
            Order Complete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlaceOrder;
