import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Share } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '@/constants/theme';
import { scoreCities } from '@/constants/cities';
import type { QuizAnswers } from '@/constants/cities';

const MEDALS = ['🥇', '🥈', '🥉', '4.', '5.'];

export default function ResultsScreen() {
  const params = useLocalSearchParams<QuizAnswers>();
  const router = useRouter();

  const results = scoreCities({
    climate: params.climate,
    lifestyle: params.lifestyle,
    budget: params.budget,
    language: params.language,
    priority: params.priority,
  });

  async function shareResults() {
    const top3 = results.slice(0, 3);
    const text = [
      'My top cities to live in — via Movable City Match:',
      ...top3.map((c, i) => `${MEDALS[i]} ${c.flag} ${c.name} (${c.score}% match)`),
      '',
      'Find yours → movable.app/city-match',
    ].join('\n');

    await Share.share({ message: text });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Your top cities</Text>
      <Text style={styles.subheading}>Based on your answers — ranked by match score</Text>

      {results.map((city, i) => (
        <View key={city.id} style={[styles.card, i === 0 && styles.cardTop]}>
          <View style={styles.cardRow}>
            <Text style={styles.medal}>{MEDALS[i]}</Text>
            <Text style={styles.flag}>{city.flag}</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.cityName}>{city.name}</Text>
              <Text style={styles.country}>{city.country}</Text>
            </View>
            <View style={[styles.scoreBadge, i === 0 && styles.scoreBadgeTop]}>
              <Text style={styles.scoreText}>{city.score}%</Text>
            </View>
          </View>
          <Text style={styles.tagline}>{city.tagline}</Text>
          <View style={styles.scoreBar}>
            <View style={[styles.scoreBarFill, { width: `${city.score}%` }]} />
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.shareBtn} onPress={shareResults}>
        <Text style={styles.shareBtnText}>Share my results 🔗</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.retakeBtn} onPress={() => router.replace('/city-match')}>
        <Text style={styles.retakeBtnText}>Retake quiz</Text>
      </TouchableOpacity>

      <View style={styles.explorePrompt}>
        <Text style={styles.exploreText}>
          Tap any city above to explore neighbourhoods, cost of living, and more.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.ink },
  content: { padding: 24, paddingTop: 16, paddingBottom: 48 },
  heading: { fontSize: 28, fontWeight: '700', color: colors.paper, marginBottom: 6 },
  subheading: { fontSize: 13, color: colors.muted, marginBottom: 24 },
  card: {
    backgroundColor: 'rgba(245,240,232,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(245,240,232,0.1)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  cardTop: {
    borderColor: 'rgba(201,125,78,0.4)',
    backgroundColor: 'rgba(201,125,78,0.06)',
  },
  cardRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  medal: { fontSize: 20, marginRight: 10 },
  flag: { fontSize: 28, marginRight: 12 },
  cardInfo: { flex: 1 },
  cityName: { fontSize: 18, fontWeight: '700', color: colors.paper },
  country: { fontSize: 12, color: colors.muted, marginTop: 2 },
  scoreBadge: {
    backgroundColor: 'rgba(122,158,126,0.2)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  scoreBadgeTop: { backgroundColor: 'rgba(201,125,78,0.2)' },
  scoreText: { fontSize: 14, fontWeight: '700', color: colors.paper },
  tagline: { fontSize: 13, color: 'rgba(245,240,232,0.6)', lineHeight: 18, marginBottom: 10 },
  scoreBar: {
    height: 3,
    backgroundColor: 'rgba(245,240,232,0.1)',
    borderRadius: 2,
  },
  scoreBarFill: {
    height: '100%',
    backgroundColor: colors.sage,
    borderRadius: 2,
  },
  shareBtn: {
    backgroundColor: colors.terracotta,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  shareBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  retakeBtn: {
    borderWidth: 1,
    borderColor: 'rgba(245,240,232,0.15)',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  retakeBtnText: { color: colors.paper, fontSize: 15 },
  explorePrompt: {
    backgroundColor: 'rgba(107,156,184,0.1)',
    borderRadius: 10,
    padding: 14,
  },
  exploreText: { fontSize: 13, color: 'rgba(245,240,232,0.6)', textAlign: 'center', lineHeight: 18 },
});
