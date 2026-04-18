import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        top: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Go to About" onPress={() => router.back()} />
      <Text>This is home</Text>
    </View>
  );
}
