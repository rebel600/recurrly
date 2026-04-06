import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Onboarding</Text>
      <Link href="/(auth)/signup">Create account</Link>
    </SafeAreaView>
  );
};

export default Onboarding;
