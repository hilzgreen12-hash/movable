export type Climate = 'warm' | 'mediterranean' | 'four-seasons' | 'cool';
export type Lifestyle = 'big-city' | 'coastal' | 'mid-size' | 'nature';
export type Budget = 'under-2k' | '2k-3.5k' | '3.5k-6k' | '6k+';
export type Language = 'english-only' | 'high-english' | 'willing-to-learn' | 'already-speak';
export type Priority = 'career' | 'culture' | 'outdoors' | 'family';

export interface QuizAnswers {
  climate: Climate;
  lifestyle: Lifestyle;
  budget: Budget;
  language: Language;
  priority: Priority;
}

export interface City {
  id: string;
  name: string;
  country: string;
  flag: string;
  teleportSlug: string;
  climate: Climate[];
  lifestyle: Lifestyle[];
  budget: Budget[];
  language: Language[];
  priority: Priority[];
  tagline: string;
}

export const CITIES: City[] = [
  {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    flag: '🇵🇹',
    teleportSlug: 'lisbon',
    climate: ['warm', 'mediterranean'],
    lifestyle: ['coastal', 'mid-size'],
    budget: ['under-2k', '2k-3.5k'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['culture', 'outdoors'],
    tagline: 'Warm, coastal, affordable, high expat appeal',
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    teleportSlug: 'amsterdam',
    climate: ['four-seasons'],
    lifestyle: ['big-city', 'mid-size'],
    budget: ['2k-3.5k', '3.5k-6k'],
    language: ['english-only', 'high-english'],
    priority: ['career', 'culture'],
    tagline: 'Bike-friendly, international, creative economy',
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    flag: '🇪🇸',
    teleportSlug: 'barcelona',
    climate: ['mediterranean', 'warm'],
    lifestyle: ['big-city', 'coastal'],
    budget: ['2k-3.5k'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['culture', 'outdoors'],
    tagline: 'Beach and city life, culture, mid-range cost',
  },
  {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    flag: '🇩🇪',
    teleportSlug: 'berlin',
    climate: ['four-seasons'],
    lifestyle: ['big-city'],
    budget: ['under-2k', '2k-3.5k'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['career', 'culture'],
    tagline: 'Tech hub, affordable for its size, creative scene',
  },
  {
    id: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    teleportSlug: 'melbourne',
    climate: ['four-seasons', 'mediterranean'],
    lifestyle: ['big-city', 'coastal'],
    budget: ['3.5k-6k'],
    language: ['english-only'],
    priority: ['career', 'culture', 'family'],
    tagline: 'English-speaking, multicultural, strong job market',
  },
  {
    id: 'valencia',
    name: 'Valencia',
    country: 'Spain',
    flag: '🇪🇸',
    teleportSlug: 'valencia',
    climate: ['warm', 'mediterranean'],
    lifestyle: ['coastal', 'mid-size'],
    budget: ['under-2k', '2k-3.5k'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['outdoors', 'culture'],
    tagline: 'Mediterranean coast, laid-back, very affordable',
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    teleportSlug: 'toronto',
    climate: ['four-seasons'],
    lifestyle: ['big-city'],
    budget: ['3.5k-6k'],
    language: ['english-only'],
    priority: ['career', 'family'],
    tagline: 'Diverse, safe, world-class city with strong opportunities',
  },
  {
    id: 'zurich',
    name: 'Zurich',
    country: 'Switzerland',
    flag: '🇨🇭',
    teleportSlug: 'zurich',
    climate: ['four-seasons', 'cool'],
    lifestyle: ['mid-size', 'nature'],
    budget: ['6k+'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['career', 'family', 'outdoors'],
    tagline: 'Highest salaries, stunning nature access, pristine city',
  },
  {
    id: 'auckland',
    name: 'Auckland',
    country: 'New Zealand',
    flag: '🇳🇿',
    teleportSlug: 'auckland',
    climate: ['mediterranean', 'warm'],
    lifestyle: ['coastal', 'nature'],
    budget: ['2k-3.5k', '3.5k-6k'],
    language: ['english-only'],
    priority: ['outdoors', 'family'],
    tagline: 'Coastal, outdoorsy, relaxed English-speaking lifestyle',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    teleportSlug: 'dubai',
    climate: ['warm'],
    lifestyle: ['big-city'],
    budget: ['3.5k-6k', '6k+'],
    language: ['english-only', 'high-english'],
    priority: ['career'],
    tagline: 'Tax-free income, ultramodern, global connectivity hub',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    teleportSlug: 'singapore',
    climate: ['warm'],
    lifestyle: ['big-city'],
    budget: ['3.5k-6k', '6k+'],
    language: ['english-only'],
    priority: ['career', 'family'],
    tagline: 'Safe, efficient, Asia gateway with English everywhere',
  },
  {
    id: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    flag: '🇦🇹',
    teleportSlug: 'vienna',
    climate: ['four-seasons'],
    lifestyle: ['big-city', 'mid-size'],
    budget: ['2k-3.5k'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['culture', 'family'],
    tagline: 'Most liveable city, culture, exceptional public services',
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    flag: '🇿🇦',
    teleportSlug: 'cape-town',
    climate: ['mediterranean', 'warm'],
    lifestyle: ['coastal', 'nature'],
    budget: ['under-2k'],
    language: ['english-only'],
    priority: ['outdoors', 'culture'],
    tagline: 'Dramatic scenery, affordable, vibrant creative scene',
  },
  {
    id: 'tallinn',
    name: 'Tallinn',
    country: 'Estonia',
    flag: '🇪🇪',
    teleportSlug: 'tallinn',
    climate: ['four-seasons', 'cool'],
    lifestyle: ['mid-size'],
    budget: ['under-2k'],
    language: ['high-english'],
    priority: ['career'],
    tagline: 'Digital nomad hotspot, EU base, very affordable',
  },
  {
    id: 'porto',
    name: 'Porto',
    country: 'Portugal',
    flag: '🇵🇹',
    teleportSlug: 'porto',
    climate: ['mediterranean', 'warm'],
    lifestyle: ['mid-size', 'coastal'],
    budget: ['under-2k'],
    language: ['high-english', 'willing-to-learn'],
    priority: ['culture', 'outdoors'],
    tagline: 'Charming, affordable, fast-growing expat community',
  },
];

export function scoreCities(answers: QuizAnswers): Array<City & { score: number }> {
  return CITIES
    .map((city) => {
      let score = 0;
      if (city.climate.includes(answers.climate)) score += 25;
      if (city.lifestyle.includes(answers.lifestyle)) score += 25;
      if (city.budget.includes(answers.budget)) score += 20;
      if (city.language.includes(answers.language)) score += 15;
      if (city.priority.includes(answers.priority)) score += 15;
      return { ...city, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
