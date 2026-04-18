import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          // backgroundColor: "red",
        },
        // headerTintColor: "#fff",
        headerTitleStyle: {
          // fontWeight: "900",
          // fontSize: 40,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Main" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
    </Stack>
  );
}
