import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const SingIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Singin</Text>
      <Link href="/signup">Create an account</Link>
    </SafeAreaView>
  );
};

export default SingIn;
