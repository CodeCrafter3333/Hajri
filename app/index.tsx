import { useAuth } from "@/context/authContext";
import { Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Welcome from "../assets/images/welcome.svg";

export default function Index() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated) return <Redirect href={"/(app)"} />;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1  items-center justify-center min-h-screen px-5">
          {/* <Image
            source={{ uri: "" }}
            resizeMode="contain"
            className="h-12 w-12 rounded-full"
          /> */}
          <Welcome width={300} height={300} />
          <Text className="text-3xl font-[poppinsSemiBold] text-center text-neutral-800">
            Hajri
          </Text>
          <Text className="font-[poppins] text-center text-neutral-500 mt-3">
          GPS based attendance tracking mobile application
          </Text>
          <TouchableOpacity
            className="mt-5 px-10 h-11 bg-blue-600 items-center justify-center rounded-xl"
            onPress={() => router.replace("/sign-in")}
          >
            <Text className="text-white font-[poppinsSemiBold]">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
