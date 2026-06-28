import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";



import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import '@/global.css';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const mode =
    colorScheme === "dark"
      ? "dark"
      : colorScheme === "light"
        ? "light"
        : "system";

  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode={mode}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}
