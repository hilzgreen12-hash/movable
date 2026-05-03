import { Stack } from 'expo-router';
import { colors } from '@/constants/theme';

export default function CityMatchLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.ink },
        headerTintColor: colors.paper,
        contentStyle: { backgroundColor: colors.ink },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'City Match', headerShown: false }} />
      <Stack.Screen name="quiz" options={{ title: '', headerBackTitle: '' }} />
      <Stack.Screen name="results" options={{ title: 'Your Cities', headerBackTitle: '' }} />
    </Stack>
  );
}
