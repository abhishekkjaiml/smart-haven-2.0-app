import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold ">Home Page</Text>
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/Login")}
        className="border px-7 py-5 rounded-xl bg-gray-900 mt-20 "
      >
        <Text className="text-white">Back to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
