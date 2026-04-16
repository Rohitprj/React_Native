import { Dimensions, Image, ImageBackground, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
      }}
      style={{ height: Dimensions.get("window").height, width: 500 }}
    >
      <View style={{}}>
        <Image
          source={require("@/assets/RNimages.jpg")}
          style={{ height: 200, width: 200, resizeMode: "contain" }}
        />
        {/* <View
        style={{
          backgroundColor: "red",
          height: 50,
          width: 50,
          flexShrink: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>box1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          height: 40,
          width: 40,
          flexShrink: 1,
        }}
      >
        <Text>box2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          height: 40,
          width: 40,
          flexShrink: 1,
        }}
      >
        <Text>box3</Text>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          height: 40,
          width: 40,
          flexShrink: 5,
        }}
      >
        <Text>box4</Text>
      </View> */}
      </View>
    </ImageBackground>
  );
}
