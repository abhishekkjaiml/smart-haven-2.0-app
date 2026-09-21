import { replace } from "expo-router/build/global-state/router";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView className="bg-blue-600 flex-1 items-center justify-center">
      <Text>Login</Text>
      <Button title="Login" onPress={() => replace("../(tabs)/Home")} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
