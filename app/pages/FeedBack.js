import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  flex,
  TextInput,
  TouchableOpacity,
} from "react-native";

import StarRating from "react-native-star-rating-widget";

const FeedBack = ({ navigation }) => {
  const [rating, setRating] = useState(0);
  const goToFeedBack = () => {
    navigation.navigate("FeedBack");
  };
  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{
          width: "90%",
          backgroundColor: "#FAEBD7",
          display: flex,
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontWeight: "800", color: "grey" }}>
            We Value Your Opinion
          </Text>

          <Text>How would you rate your overall experience?</Text>
        </View>

        <View style={{ display: "flex", alignItems: "center", color: "grey" }}>
          {/* <StarRatingDisplay rating={4.5} /> */}
          <StarRating rating={rating} onChange={setRating} />
        </View>

        <View style={{ display: flex, alignItems: "center", gap: 5 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "grey" }}
          >
            Kindly take a moment to tell us what you think
          </Text>

          <TextInput
            style={{
              height: 200,
              width:300 ,
              borderColor: "grey",
              color: "grey",
            }}
            placeholder=""
          />
        </View>
        <TouchableOpacity
          onPress={goToFeedBack}
          style={{
            width: "30%",
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
            Share my feedback
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FeedBack;
