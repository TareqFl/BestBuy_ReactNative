import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import { api1, official } from "../API/index";
import { COLOR } from "../theme";
import DisplayCard from "../components/DisplayCard";

const Home = () => {
  const [products, setProducts] = React.useState(false);
  const [renderNum, setRenderNum] = React.useState(10);
  React.useLayoutEffect(() => {
    fetch(official + "?limit=16")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setProducts(data.products);
        } else {
          console.log("no data");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!products) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={COLOR.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 200,
          width: "100%",
          backgroundColor: COLOR.lightPink,
          flexDirection: "row",
        }}
      >
        {/* Left Side */}
        <View
          id="leftSide"
          style={{
            flex: 0.5,
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              top: "25%",
            }}
          >
            Grab Up to 50% Off On Selected Headphones
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR.primary,
              padding: 10,
              alignItems: "center",
              width: "75%",
              alignSelf: "center",
              borderRadius: 12,
              top: "30%",
            }}
          >
            <Text style={{ color: COLOR.whiteCream }}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        {/* Right Side */}
        <View id="RightSide" style={{ flex: 0.5 }}>
          <Image
            source={require("../assets/girl1nobg.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* View Products */}

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 1,
        }}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        keyExtractor={(key) => key.id}
        renderItem={({ item, index }) => <DisplayCard data={item} />}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{ height: 5}} />}
        onEndReachedThreshold={0.5}
        // getItemLayout={(data, index) => ({
        //   length: 225,
        //   offset: 225 * index,
        //   index,
        // })}
        removeClippedSubviews={Platform.OS === "android" ? true : false}
        // updateCellsBatchingPeriod={1000}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  product_container: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 2,
    // padding: 5,
  },
});
