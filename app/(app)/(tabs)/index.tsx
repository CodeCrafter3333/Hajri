import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/ui/home/Header";
import Kategori from "@/components/ui/home/Kategori";
import MealList from "@/components/ui/home/MealList";
import { TouchableOpacity, Text, View } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import AttendanceHistory from "@/components/ui/home/AttendanceHistory";

const Home = () => {
  const [categoryId, setCategoryId] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <Header />
      <View className="px-5 my-5">
        <View className="mb-5 flex-row items-center justify-between">
         <AttendanceHistory attendanceData={[
          { date: '2023-01-01', status: 'Present' },
          { date: '2023-01-02', status: 'Absent' },
          { date: '2023-01-03', status: 'Late' },
         ]} />
        </View>
      </View>
      {/* <Kategori categoryId={categoryId} setCategoryId={setCategoryId} />
      <MealList categoryId={categoryId} /> */}
    </SafeAreaView>
  );
};

export default Home;
