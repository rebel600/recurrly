import { Link } from "expo-router";
import { Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View>
      <Text>Onboarding</Text>
      <Link href="/(auth)/signup">Create account</Link>
    </View>
  );
};

export default Onboarding;
