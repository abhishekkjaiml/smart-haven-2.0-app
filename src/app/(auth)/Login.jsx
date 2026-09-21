import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Leaf } from "lucide-react-native";
import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 flex-row ">
      <KeyboardAvoidingView
        className="flex-1 flex-row items-center justify-center"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("../../../assets/smart-home-bg.png")}
          className="flex-1 flex-row h-screen justify-center items-center"
          resizeMode="cover"
        >
          <ScrollView contentContainerClassName="px-5 pt-3 pb-10">
            {/* Hero */}

            {/* Brand */}
            <View className="items-center mt-2 mb-[22px]">
              <View className="flex-row items-center">
                <View className=" w-[42px] h-[42px] rounded-xl bg-blue-100 items-center justify-center mr-2">
                  <Ionicons name="home" size={27} color={"#2563EB"} />
                </View>
                <Text className="text-[32px] font-extrabold tracking-[-1] text-slate-900">
                  Smart
                  <Text className="text-blue-600 font-extrabold">Haven</Text>
                </Text>
              </View>
              <Text className="mt-[3px] text-[15px] font-medium text-slate-500">
                Clean Air. Better Living.
              </Text>
            </View>

            {/* Login Card */}

            <View className="border rounded-[26px] px-5 py-6 border-slate-200 shadow-sm bg-white">
              <Text className="text-[28px]  font-extrabold text-slate-900">
                Welcome Back
              </Text>
              <Text className="text-[15px] m-1 mb-[22px] text-slate-500">
                Login to your account
              </Text>

              {/* Email */}

              <View className="mb-4">
                <Text className="text-sm font-semibold mb-2 text-slate-900">
                  Email Address
                </Text>
                <View className="border h-14 rounded-[15px] border-slate-300 bg-slate-50 flex-row items-center">
                  <Ionicons
                    name="mail-outline"
                    size={21}
                    color={"#64748B"}
                    className="ml-4"
                  />

                  <TextInput
                    className="flex-1 w-full px-3 text-[15px] text-slate-900"
                    placeholder="you@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Password */}

              <View className="mb-4">
                <Text className="text-sm font-semibold mb-2 text-slate-900">
                  Password
                </Text>
                <View className="border h-14 rounded-[15px] border-slate-300 bg-slate-50 flex-row items-center">
                  <Ionicons
                    name="lock-closed-outline"
                    size={21}
                    color={"#64748B"}
                    className="ml-4"
                  />
                  <TextInput
                    className="flex-1 px-3 h-full text-[15px] text-slate-900"
                    placeholder="Enter your password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={!showPassword}
                  />

                  <TouchableOpacity
                    className=" w-[45px] items-center justify-center"
                    activeOpacity={0.7}
                    onPress={onShowEyeClick}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye"}
                      size={21}
                      color={"#64748B"}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password */}

              <TouchableOpacity
                className="self-end -mt-1 mb-5"
                activeOpacity={0.7}
              >
                <Text className="text-sm font-semibold text-blue-600">
                  Forgot password?
                </Text>
              </TouchableOpacity>

              {/* Login Button */}

              <TouchableOpacity
                className="h-14 rounded-2xl bg-blue-600 items-center justify-center"
                activeOpacity={0.85}
                onPress={() => router.replace("/(tabs)/Home")}
              >
                <Text className="text-[17px] font-bold text-white">Login</Text>
              </TouchableOpacity>

              {/* Others */}

              <View className="flex-row items-center my-[22px]">
                <View className="flex-1 h-px bg-slate-200" />
                <Text className="mx-3 text-[13px] font-medium text-sla-400">
                  Or continue with
                </Text>
                <View className="flex-1 h-px bg-slate-200" />
              </View>

              {/* Social Login */}

              <View className="flex-row">
                <TouchableOpacity
                  className="flex-1 h-[52px] rounded-[14px] border border-slate-200 bg-slate-50 flex-row items-center justify-center mx-[5px]"
                  activeOpacity={0.8}
                >
                  <Ionicons name="logo-google" size={22} color={"#111827"} />
                  <Text className="text-sm font-semibold ml-2 text-slate-900">
                    Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 h-[52px] rounded-[14px] border border-slate-200 bg-slate-50 flex-row items-center justify-center mx-[5px]"
                  activeOpacity={0.8}
                >
                  <Ionicons name="logo-apple" size={22} color={"#111827"} />
                  <Text className="text-sm font-semibold ml-2 text-slate-900">
                    Apple
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Signup */}

            <View className="flex-row items-center justify-center mt-[22px]">
              <Text className="text-sm text-slate-500">
                Don’t have an account?
              </Text>

              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-sm font-bold text-blue-600">Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom */}

            <View className="flex-row items-center justify-center mt-[25px]">
              <Leaf size={16} color={"#8FB9ED"} />

              <Text className="text-xs ml-1.5 text-slate-400">
                A healthier home, a brighter tomorrow
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
