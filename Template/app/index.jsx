import { Image } from "expo-image";
import { FlatList, Text, View } from "react-native";

export default function index() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      price: 100,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      price: 200,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd9145571e29d72",
      title: "Third Item",
      price: 300,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-1571e29d72",
      title: "Third Item",
      price: 400,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "58694a0f-3da1-471f-96-145571e29d72",
      title: "Third Item",
      price: 500,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "58694a0f-3da1-471fd96-145571e29d72",
      title: "Third Item",
      price: 600,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d",
      title: "Third Item",
      price: 700,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-1451e29d72",
      title: "Third Item",
      price: 800,
      image:
        "https://img.freepik.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    },
  ];
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={{ backgroundColor: "red", margin: 20 }}>
            <Image
              source={item.image}
              style={{ height: 200, width: 200, resizeMode: "contain" }}
            />
            <Text
              style={{
                backgroundColor: "#f9c2ff",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
              }}
            >
              {index} {item.title}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Price : {item.price}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Description : Hello i am nature
            </Text>
          </View>
        )}
      />
    </View>
  );
}
