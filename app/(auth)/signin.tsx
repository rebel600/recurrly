import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SingIn = () => {
  return (
    <View>
      <Text>Singin</Text>
      <Link href="/signup">Create an account</Link>
    </View>
  );
};

export default SingIn;
