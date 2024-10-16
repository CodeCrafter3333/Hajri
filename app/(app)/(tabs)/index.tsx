import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Header from "@/components/ui/home/Header";
import Kategori from "@/components/ui/home/Kategori";
import MealList from "@/components/ui/home/MealList";
import { TouchableOpacity, Text, View } from "react-native";

const Home = () => {
  const [categoryId, setCategoryId] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <Header />
      <View className="px-5 my-5">
      <View className="mb-5 flex-row items-center justify-between">
        <View>

      <TouchableOpacity
            className={`bg-blue-600 h-12 rounded-xl items-center justify-center w-full my-5`}
          >
              <Text className="text-white font-[poppinsSemiBold] text-base px-5">
                Create new Orginisation
              </Text>
        </TouchableOpacity>

        </View>
        </View>
        </View>
      {/* <Kategori categoryId={categoryId} setCategoryId={setCategoryId} />
      <MealList categoryId={categoryId} /> */}
    </SafeAreaView>
  );
};

export default Home;
