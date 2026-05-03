import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/theme';
import type { Climate, Lifestyle, Budget, Language, Priority } from '@/constants/cities';

interface Question {
  id: string;
  title: string;
  options: { value: string; label: string; emoji: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'climate',
    title: "What's your climate?",
    options: [
      { value: 'warm', label: 'Warm and sunny year-round', emoji: '☀️' },
      { value: 'mediterranean', label: 'Mediterranean — hot summers, mild winters', emoji: '🌤' },
      { value: 'four-seasons', label: 'Four seasons — I like variety', emoji: '🍂' },
      { value: 'cool', label: 'Cool and crisp — I run hot', emoji: '❄️' },
    ],
  },
  {
    id: 'lifestyle',
    title: 'How do you want to live?',
    options: [
      { value: 'big-city', label: 'Big city — culture, buzz, opportunity', emoji: '🏙' },
      { value: 'coastal', label: 'Coastal — beach access is non-negotiable', emoji: '🌊' },
      { value: 'mid-size', label: 'Mid-size and manageable — less chaos', emoji: '🏘' },
      { value: 'nature', label: 'Near nature — mountains, trails, space', emoji: '🌲' },
    ],
  },
  {
    id: 'budget',
    title: "What's your monthly budget?",
    options: [
      { value: 'under-2k', label: 'Under €2,000 — affordable is the priority', emoji: '💸' },
      { value: '2k-3.5k', label: '€2,000 – €3,500 — comfortable mid-range', emoji: '💳' },
      { value: '3.5k-6k', label: '€3,500 – €6,000 — quality over cost', emoji: '💰' },
      { value: '6k+', label: '€6,000+ — budget is not the constraint', emoji: '🏦' },
    ],
  },
  {
    id: 'language',
    title: 'Language comfort?',
    options: [
      { value: 'english-only', label: 'English-speaking cities only', emoji: '🇬🇧' },
      { value: 'high-english', label: 'High English proficiency is enough', emoji: '🌐' },
      { value: 'willing-to-learn', label: "I'm willing to learn a new language", emoji: '📚' },
      { value: 'already-speak', label: 'I already speak another language', emoji: '🗣' },
    ],
  },
  {
    id: 'priority',
    title: 'What matters most?',
    options: [
      { value: 'career', label: 'Career and opportunity', emoji: '💼' },
      { value: 'culture', label: 'Culture, food, and lifestyle', emoji: '🎭' },
      { value: 'outdoors', label: 'Outdoors and quality of life', emoji: '🏔' },
      { value: 'family', label: 'Family, schools, and safety', emoji: '👨‍👩‍👧' },
    ],
  },
];

export default function QuizScreen() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = QUESTIONS[currentQ];
  const progress = ((currentQ) / QUESTIONS.length) * 100;

  function select(value: string) {
    const updated = { ...answers, [question.id]: value };
    setAnswers(updated);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      router.push({
        pathname: '/city-match/results',
        params: {
          climate: updated.climate,
          lifestyle: updated.lifestyle,
          budget: updated.budget,
          language: updated.language,
          priority: updated.priority,
        },
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.counter}>{currentQ + 1} of {QUESTIONS.length}</Text>

        <Text style={styles.title}>{question.title}</Text>

        <View style={styles.options}>
          {question.options.map((opt) => (
            <TouchableOpacity
              key={opt.value}
              style={styles.option}
              onPress={() => select(opt.value)}
            >
              <Text style={styles.optionEmoji}>{opt.emoji}</Text>
              <Text style={styles.optionLabel}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.ink },
  inner: { flex: 1, padding: 24, paddingTop: 16 },
  progressTrack: {
    height: 3,
    backgroundColor: 'rgba(245,240,232,0.1)',
    borderRadius: 2,
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.terracotta,
    borderRadius: 2,
  },
  counter: { fontSize: 11, color: colors.muted, letterSpacing: 1, marginBottom: 28 },
  title: { fontSize: 26, fontWeight: '700', color: colors.paper, marginBottom: 28, lineHeight: 32 },
  options: { gap: 10 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245,240,232,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(245,240,232,0.12)',
    borderRadius: 12,
    padding: 16,
    gap: 14,
  },
  optionEmoji: { fontSize: 22 },
  optionLabel: { fontSize: 15, color: colors.paper, flex: 1, lineHeight: 20 },
});
