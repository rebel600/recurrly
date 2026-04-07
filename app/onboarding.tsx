import images from "@/constants/images";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 bg-accent p-5">
      <View className="flex items-center justify-center">
        <Image source={images.splashPattern} />
      </View>
      <View className="flex-1 items-center justify-center gap-4">
        <View className="justify-center items-center">
          <Text className="text-4xl font-sans-semibold text-background">
            Gain Financial Clarity
          </Text>
          <Text className="text-lg text-background">
            Track, analyze and cancel with ease.
          </Text>
        </View>
        <View className="bg-background py-4 px-18 rounded-full">
          <Pressable>
            <Link href="/signin" className="text-center font-sans-bold">
              Get Started
            </Link>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
