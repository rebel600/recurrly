import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">>
      <Text>SignUp</Text>
      <Link href="/(auth)/signin">Already have an account</Link>
      <Link href="/">Go to Home</Link>
    </SafeAreaView>
  );
};

export default SignUp;
