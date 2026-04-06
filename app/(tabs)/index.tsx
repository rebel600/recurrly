import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold text-primary">Home</Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/signin"
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold "
      >
        Go to SignIn
      </Link>
      <Link
        href="/(auth)/signup"
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold "
      >
        Go to SignUp
      </Link>
    </SafeAreaView>
  );
}
