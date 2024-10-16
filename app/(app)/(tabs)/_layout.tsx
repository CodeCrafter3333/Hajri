import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontFamily: "poppinsSemiBold" },
        tabBarActiveTintColor: "red",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={20} color={color} />
          ),
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="hours"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="clock" size={20} color={color} />
          ),
          title: "My hours",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={20} color={color} />
          ),
          title: "Settings",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
