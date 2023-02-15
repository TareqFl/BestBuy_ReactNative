import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLOR } from "../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const DisplayCard = ({ data }) => {
  const { title, description, price, rating, brand, thumbnail } = data;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innercontainer}>
        <Image
          source={{ uri: thumbnail }}
          style={{ height: "50%", width: "100%" }}
          resizeMode="stretch"
        />
        <View
          style={{
            height: "50%",
            backgroundColor: COLOR.whiteCream,
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <View id="GAP" style={{ height: 5 }} />
          {/* TITLE AND PRICE */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 12, textAlign: "center", fontWeight: "bold" }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                fontWeight: "bold",
                color: COLOR.red,
              }}
            >
              ${price}
            </Text>
          </View>
          <View id="GAP" style={{ height: 5 }} />
          <Text style={{ fontSize: 11, textAlign: "center" }}>
            {description.slice(0, 75) + "..."}
          </Text>
          <View id="GAP" style={{ height: 5 }} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="star" size={12} color={COLOR.secondary} />
            <MaterialIcons name="star" size={12} color={COLOR.secondary} />
            <MaterialIcons name="star" size={12} color={COLOR.secondary} />
            <MaterialIcons name="star" size={12} color={COLOR.secondary} />
            <MaterialIcons name="star" size={12} color={COLOR.secondary} />
            <Text style={{ fontSize: 12, textAlign: "center" }}>
              Ratings({rating})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    height: 225,
    // borderColor: "red",
    // borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
  },

  innercontainer: {
    width: "100%",
    height: "100%",
    elevation: 2,
    shadowColor: COLOR.textColor,
  },
});
