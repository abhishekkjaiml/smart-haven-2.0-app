import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Grid2X2,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from "lucide-react-native";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,

        headerTitleAlign: "left",

        headerStyle: {
          backgroundColor: "#FFFFFF",
        },

        headerTintColor: "#0F172A",

        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "700",
        },

        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#94A3B8",

        tabBarStyle: {
          height: 65 + insets.bottom,
          paddingTop: 6,
          paddingBottom: insets.bottom + 6,

          backgroundColor: "#FFFFFF",

          borderTopWidth: 1,
          borderTopColor: "#E2E8F0",

          elevation: 8,
          shadowOpacity: 0.1,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarIconStyle: {
          marginTop: 2,
        },

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Smart Haven",
          tabBarLabel: "Home",

          tabBarIcon: ({ color, focused }) => (
            <HomeIcon size={23} color={color} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />

      <Tabs.Screen
        name="Rooms"
        options={{
          title: "Rooms",
          tabBarLabel: "Rooms",

          tabBarIcon: ({ color, focused }) => (
            <Grid2X2 size={23} color={color} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",

          tabBarIcon: ({ color, focused }) => (
            <SettingsIcon
              size={23}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
    </Tabs>
  );
}
