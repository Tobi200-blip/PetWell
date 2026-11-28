// Breed matcher: scores dogs and cats using only the data we already hold
// (size, exercise, grooming and temperament words). No made-up numbers.
import { getBreeds } from '../services/breedService';
import { getCats } from '../services/catService';

export const LEVELS = ['low', 'moderate', 'high', 'very-high'];
const LEVEL_FROM_LABEL = { Low: 0, Moderate: 1, High: 2, 'Very high': 3 };
const GROOM_FROM_LABEL = { Low: 0, Moderate: 1, High: 2 };

export const VIBES = {
  calm: {
    label: 'Calm and gentle',
    hint: 'Relaxed, patient company',
    words: ['calm', 'gentle', 'patient', 'even-tempered', 'easygoing', 'docile', 'quiet', 'sweet'],
  },
  playful: {
    label: 'Playful and lively',
    hint: 'Fun, energy and games',
    words: ['playful', 'energetic', 'lively', 'spirited', 'exuberant', 'cheerful', 'merry', 'active',
      'outgoing', 'extroverted', 'athletic', 'agile', 'mischievous', 'clownish'],
  },
  affectionate: {
    label: 'Loving and loyal',
    hint: 'A devoted shadow who loves people',
    words: ['affectionate', 'loyal', 'devoted', 'friendly', 'people-loving', 'social', 'sociable',
      'sweet', 'dependable'],
  },
  independent: {
    label: 'Independent',
    hint: 'Happy doing their own thing',
    words: ['independent', 'reserved', 'dignified'],
  },
  smart: {
    label: 'Smart and curious',
    hint: 'Quick learners who like puzzles',
    words: ['smart', 'intelligent', 'bright', 'clever', 'curious'],
  },
  watchful: {
    label: 'Alert and protective',
    hint: 'Confident and watchful',
    words: ['alert', 'protective', 'confident', 'courageous', 'bold', 'fearless'],
  },
};

const EASY_WORDS = ['gentle', 'patient', 'even-tempered', 'easygoing', 'adaptable', 'docile', 'friendly'];
const HARD_WORDS = ['stubborn', 'strong-willed', 'intense', 'driven', 'work-driven', 'determined', 'demanding'];

export function vibeKeysFor(pet) {
  return Object.keys(VIBES).filter((k) => (pet === 'cat' ? k !== 'watchful' : true));
}

const tokens = (text = '') =>
  text.toLowerCase().split(/[,;]| and /).map((s) => s.trim()).filter(Boolean);

const SIZE_SCORE = {
  small: { Small: 3, Medium: 2, Large: 0, Giant: -1 },
  medium: { Small: 2, Medium: 3, Large: 2, Giant: 0 },
  large: { Small: 2, Medium: 3, Large: 3, Giant: 2 },
};

const SIZE_REASON = {
  small: 'Size suits a smaller home',
  medium: 'Size suits an average home',
  large: 'Plenty of room for this size',
};

function scoreOne(item, kind, a) {
  const reasons = [];
  const cautions = [];
  let score = 0;
  let max = 0;
  const words = tokens(item.temperament);

  // Size (dogs only; cats vary little in how much room they need)
  if (kind === 'dog' && SIZE_SCORE[a.home]) {
    max += 3;
    const s = SIZE_SCORE[a.home][item.size] ?? 1;
    score += s;
    if (s >= 2) reasons.push(`${SIZE_REASON[a.home]} (${item.size.toLowerCase()})`);
    else if (s <= 0) cautions.push(`${item.size} size may feel cramped in a smaller home`);
  }

  // Exercise / activity
  max += 3;
  const need = LEVEL_FROM_LABEL[item.exercise] ?? 1;
  const have = LEVELS.indexOf(a.active);
  const diff = Math.abs(need - have);
  score += 3 - diff * 2;
  if (diff === 0) reasons.push(`${item.exercise} activity needs match yours`);
  else if (diff === 1) reasons.push('Activity needs are close to what you can give');
  else if (need > have) cautions.push(`${item.exercise} activity needs are more than you planned for`);
  else cautions.push(`Needs less activity than you have to offer (${item.exercise.toLowerCase()})`);

  // Grooming
  max += 2;
  const g = GROOM_FROM_LABEL[item.grooming] ?? 1;
  const tol = LEVELS.indexOf(a.groom);
  if (g <= tol) {
    score += 2;
    reasons.push(`${item.grooming} grooming fits the time you have`);
  } else {
    score -= 3 * (g - tol);
    cautions.push(`${item.grooming} grooming needs, more than you planned for`);
  }

  // Temperament
  for (const v of a.vibe) {
    const def = VIBES[v];
    if (!def) continue;
    max += 3;
    const hits = words.filter((w) => def.words.includes(w));
    score += Math.min(hits.length, 2) * 1.5;
    if (hits.length) reasons.push(`Described as ${hits.slice(0, 2).join(' and ')}`);
  }

  // Experience
  if (a.exp === 'first') {
    max += 2;
    const easy = words.filter((w) => EASY_WORDS.includes(w)).length;
    const hard = words.filter((w) => HARD_WORDS.includes(w));
    score += Math.min(easy, 2) - hard.length * 1.5;
    if (easy) reasons.push('Gentle, easy-going traits for a first pet');
    if (hard.length) cautions.push(`Can be ${hard[0]}, which suits experienced owners`);
  }

  const ratio = max ? score / max : 0;
  const label = ratio >= 0.8 ? 'Great match' : ratio >= 0.6 ? 'Good match' : 'Worth a look';
  return { item, kind, score, ratio, label, reasons: reasons.slice(0, 3), cautions: cautions.slice(0, 1) };
}

export function getMatches(a, limit = 5) {
  const kind = a.pet === 'cat' ? 'cat' : 'dog';
  const list = kind === 'cat' ? getCats() : getBreeds();
  return list
    .map((item) => scoreOne(item, kind, a))
    .sort((x, y) => y.score - x.score || x.item.name.localeCompare(y.item.name))
    .slice(0, limit);
}

// Answers <-> URL, so results can be shared as a link
export function answersFromParams(params) {
  const pet = params.get('pet');
  const home = params.get('home');
  const active = params.get('active');
  const groom = params.get('groom');
  const exp = params.get('exp');
  const vibe = (params.get('vibe') || '').split(',').filter((v) => VIBES[v]).slice(0, 2);
  if (!['dog', 'cat'].includes(pet)) return null;
  if (pet === 'dog' && !SIZE_SCORE[home]) return null;
  if (!LEVELS.includes(active) || !LEVELS.slice(0, 3).includes(groom)) return null;
  if (!['first', 'some'].includes(exp) || vibe.length === 0) return null;
  return { pet, home: pet === 'dog' ? home : '', active, groom, vibe, exp };
}

export function paramsFromAnswers(a) {
  const p = { pet: a.pet, active: a.active, groom: a.groom, vibe: a.vibe.join(','), exp: a.exp };
  if (a.pet === 'dog') p.home = a.home;
  return p;
}
