// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: {
//           // backgroundColor: "red",
//         },
//         // headerTintColor: "#fff",
//         headerTitleStyle: {
//           // fontWeight: "900",
//           // fontSize: 40,
//         },
//       }}
//     >
//       <Stack.Screen name="index" options={{ title: "Main" }} />
//       <Stack.Screen name="home" options={{ title: "Home" }} />
//     </Stack>
//   );
// }

import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "lightblue" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
      }}
    >
      <Stack.Screen name="index" options={{ title: "MAIN PAGE" }} />
      <Stack.Screen name="home" options={{ title: "HOME SCREEN" }} />
    </Stack>
  );
}
