import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.logo}>Mov<Text style={styles.logoAccent}>able</Text></Text>
        <Text style={styles.tagline}>YOUR CITY, YOUR MOVE</Text>
      </View>

      <TouchableOpacity style={styles.heroCard} onPress={() => router.push('/city-match')}>
        <View style={styles.heroTag}>
          <Text style={styles.heroTagText}>✨ VIRAL FEATURE</Text>
        </View>
        <Text style={styles.heroTitle}>Find your city</Text>
        <Text style={styles.heroSubtitle}>
          5 questions. No login. Get your top 5 cities to live in — shareable results.
        </Text>
        <View style={styles.heroBtn}>
          <Text style={styles.heroBtnText}>Start City Match →</Text>
        </View>
        <Text style={styles.heroNote}>No account needed · 2 minutes</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Already know your city?</Text>

      {USER_TYPES.map((type) => (
        <TouchableOpacity key={type.id} style={styles.typeCard}>
          <Text style={styles.typeEmoji}>{type.emoji}</Text>
          <View style={styles.typeInfo}>
            <Text style={styles.typeName}>{type.name}</Text>
            <Text style={styles.typeDesc}>{type.desc}</Text>
          </View>
          <Text style={styles.typeArrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const USER_TYPES = [
  { id: 'premover', emoji: '✈️', name: 'Pre-Mover', desc: '2–6 months before moving' },
  { id: 'arriving', emoji: '🛬', name: 'Just Arrived', desc: 'First 90 days setup hub' },
  { id: 'settled', emoji: '🏡', name: 'Settled Expat', desc: 'Discover and connect' },
  { id: 'serial', emoji: '🔄', name: 'Serial Mover', desc: 'City vault and compare' },
  { id: 'returning', emoji: '🔁', name: 'Returning Home', desc: "What's changed since you left" },
  { id: 'family', emoji: '👨‍👩‍👧', name: 'Moving with Family', desc: 'Schools, neighbourhoods, activities' },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.ink },
  content: { padding: 24, paddingTop: 64 },
  header: { marginBottom: 32 },
  logo: { fontSize: 36, fontWeight: '700', color: colors.paper, letterSpacing: 1 },
  logoAccent: { color: colors.terracotta },
  tagline: { fontSize: 11, letterSpacing: 3, color: colors.muted, marginTop: 4 },
  heroCard: {
    backgroundColor: 'rgba(201,125,78,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(201,125,78,0.35)',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
  },
  heroTag: {
    backgroundColor: colors.terracotta,
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 12,
  },
  heroTagText: { color: '#fff', fontSize: 10, fontWeight: '600', letterSpacing: 1 },
  heroTitle: { fontSize: 26, fontWeight: '700', color: colors.paper, marginBottom: 8 },
  heroSubtitle: { fontSize: 14, color: 'rgba(245,240,232,0.7)', lineHeight: 20, marginBottom: 20 },
  heroBtn: {
    backgroundColor: colors.terracotta,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  heroBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  heroNote: { fontSize: 11, color: colors.muted, textAlign: 'center' },
  sectionTitle: { fontSize: 13, letterSpacing: 2, color: colors.muted, marginBottom: 12 },
  typeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245,240,232,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(245,240,232,0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  typeEmoji: { fontSize: 22, marginRight: 14 },
  typeInfo: { flex: 1 },
  typeName: { fontSize: 15, fontWeight: '600', color: colors.paper },
  typeDesc: { fontSize: 12, color: colors.muted, marginTop: 2 },
  typeArrow: { fontSize: 20, color: colors.muted },
});
