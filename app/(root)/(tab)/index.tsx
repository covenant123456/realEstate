import { Text, View } from "react-native";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold ps-3 font-rubik text-3xl">Welcome to RNestate</Text>
     
    </View>
  );
}
