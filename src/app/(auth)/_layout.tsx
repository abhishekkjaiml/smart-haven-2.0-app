import { Stack } from "expo-router";

const AuthLayer = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default AuthLayer;
