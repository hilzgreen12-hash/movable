import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/theme';

export default function CityMatchEntry() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.globe}>🌍</Text>
        <Text style={styles.title}>Find your city</Text>
        <Text style={styles.subtitle}>
          Answer 5 questions about your lifestyle and values. Get your top 5 matched cities to live in — ranked and explained.
        </Text>

        <View style={styles.pillRow}>
          {['No login', '2 minutes', 'Shareable results'].map((p) => (
            <View key={p} style={styles.pill}>
              <Text style={styles.pillText}>{p}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push({ pathname: '/city-match/quiz', params: { q: '0' } })}
        >
          <Text style={styles.btnText}>Start the quiz →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.ink, justifyContent: 'center' },
  inner: { padding: 32, alignItems: 'center' },
  globe: { fontSize: 56, marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '700', color: colors.paper, textAlign: 'center', marginBottom: 16 },
  subtitle: {
    fontSize: 15,
    color: 'rgba(245,240,232,0.65)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  pillRow: { flexDirection: 'row', gap: 8, marginBottom: 36, flexWrap: 'wrap', justifyContent: 'center' },
  pill: {
    borderWidth: 1,
    borderColor: 'rgba(245,240,232,0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  pillText: { fontSize: 12, color: 'rgba(245,240,232,0.6)' },
  btn: {
    backgroundColor: colors.terracotta,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 48,
    width: '100%',
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
