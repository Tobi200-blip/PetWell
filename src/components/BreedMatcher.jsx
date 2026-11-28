import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  IconArrowLeft as ArrowLeftIcon,
  IconArrowRight as ArrowRightIcon,
  IconCheck as CheckIcon,
  IconRefresh as RefreshIcon,
  IconLink as LinkIcon,
  IconDog as DogIcon,
  IconCat as CatIcon,
  IconAlertTriangle as AlertIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import FramedImage from './FramedImage';
import { getBreedImage } from '../utils/breedImages';
import { getCatImage } from '../utils/catImages';
import { VIBES, vibeKeysFor, getMatches, answersFromParams, paramsFromAnswers } from '../utils/matcher';
import matchHero from '../assets/articles/housetraining-hero.jpg';

function buildSteps(pet) {
  const isCat = pet === 'cat';
  const steps = [
    {
      key: 'pet',
      title: 'Which pet are you thinking about?',
      options: [
        { value: 'dog', label: 'A dog', hint: 'Find my dog breed', icon: DogIcon },
        { value: 'cat', label: 'A cat', hint: 'Find my cat breed', icon: CatIcon },
      ],
    },
  ];
  if (!isCat) {
    steps.push({
      key: 'home',
      title: 'How much space do you have at home?',
      options: [
        { value: 'small', label: 'Apartment or small home', hint: 'Limited indoor and outdoor space' },
        { value: 'medium', label: 'Average home', hint: 'Some room, maybe a small yard' },
        { value: 'large', label: 'House with a garden', hint: 'Plenty of space to move' },
      ],
    });
  }
  steps.push(
    {
      key: 'active',
      title: isCat ? 'How much playtime can you give each day?' : 'How active is your lifestyle?',
      options: isCat
        ? [
            { value: 'low', label: 'A little', hint: 'Play now and then' },
            { value: 'moderate', label: 'Some', hint: 'Short play sessions daily' },
            { value: 'high', label: 'Plenty', hint: 'Regular games and climbing' },
            { value: 'very-high', label: 'Lots', hint: 'Long, active play every day' },
          ]
        : [
            { value: 'low', label: 'Relaxed', hint: 'Short, easy walks' },
            { value: 'moderate', label: 'Steady', hint: 'A good walk most days' },
            { value: 'high', label: 'Active', hint: 'Long walks, runs or hikes' },
            { value: 'very-high', label: 'Very active', hint: 'Daily vigorous exercise and training' },
          ],
    },
    {
      key: 'groom',
      title: 'How much grooming are you happy to do?',
      options: [
        { value: 'low', label: 'As little as possible', hint: 'A quick brush now and then' },
        { value: 'moderate', label: 'Some', hint: 'Regular brushing each week' },
        { value: 'high', label: 'Happy to groom', hint: 'Daily care or professional grooming is fine' },
      ],
    },
    {
      key: 'vibe',
      multi: true,
      title: 'What personality do you want? Pick up to 2.',
      options: vibeKeysFor(pet).map((k) => ({ value: k, label: VIBES[k].label, hint: VIBES[k].hint })),
    },
    {
      key: 'exp',
      title: 'Have you looked after a pet before?',
      options: [
        { value: 'first', label: 'This would be my first', hint: 'Favor easy-going breeds' },
        { value: 'some', label: "I've had pets before", hint: 'Happy with a bigger challenge' },
      ],
    }
  );
  return steps;
}

function OptionButton({ option, selected, onClick }) {
  const Icon = option.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full text-left flex items-center gap-3 rounded-xl border px-4 py-3.5 min-h-16 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 ${
        selected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {Icon && <Icon className={`size-6 shrink-0 ${selected ? 'text-blue-600' : 'text-gray-400'}`} />}
      <span className="flex-1">
        <span className="block text-sm sm:text-base font-medium text-gray-900">{option.label}</span>
        {option.hint && <span className="block text-xs sm:text-sm text-gray-500 mt-0.5">{option.hint}</span>}
      </span>
      <span
        className={`size-5 rounded-full border flex items-center justify-center shrink-0 ${
          selected ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300'
        }`}
        aria-hidden="true"
      >
        {selected && <CheckIcon className="size-3.5" stroke={3} />}
      </span>
    </button>
  );
}

function Quiz({ onFinish }) {
  const [answers, setAnswers] = useState({ vibe: [] });
  const [step, setStep] = useState(0);
  const steps = useMemo(() => buildSteps(answers.pet), [answers.pet]);
  const current = steps[step];
  const value = answers[current.key];

  const choose = (v) => {
    if (current.multi) {
      const list = answers.vibe || [];
      const next = list.includes(v) ? list.filter((x) => x !== v) : list.length >= 2 ? [list[1], v] : [...list, v];
      setAnswers({ ...answers, vibe: next });
      return;
    }
    const next = { ...answers, [current.key]: v };
    if (current.key === 'pet' && v !== answers.pet) next.vibe = [];
    setAnswers(next);
    // move on straight away for single-choice questions
    const nextSteps = buildSteps(next.pet);
    if (step + 1 >= nextSteps.length) onFinish(next);
    else setStep(step + 1);
  };

  const canContinue = current.multi ? (answers.vibe || []).length > 0 : Boolean(value);
  const isLast = step === steps.length - 1;

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Question {step + 1} of {steps.length}</span>
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-1 hover:text-gray-800">
              <ArrowLeftIcon className="size-3.5" /> Back
            </button>
          )}
        </div>
        <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden" role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1}>
          <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mb-5">{current.title}</h2>
      <div className="flex flex-col gap-3">
        {current.options.map((o) => (
          <OptionButton
            key={o.value}
            option={o}
            selected={current.multi ? (answers.vibe || []).includes(o.value) : value === o.value}
            onClick={() => choose(o.value)}
          />
        ))}
      </div>

      {current.multi && (
        <button
          type="button"
          disabled={!canContinue}
          onClick={() => (isLast ? onFinish(answers) : setStep(step + 1))}
          className="mt-6 w-full sm:w-auto px-8 h-11 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors inline-flex items-center justify-center gap-2"
        >
          Continue <ArrowRightIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

function MatchCard({ m, rank }) {
  const { item, kind, label, reasons, cautions } = m;
  const image = kind === 'cat' ? getCatImage(item.slug) : getBreedImage(item.slug);
  const to = kind === 'cat' ? `/cat/${item.slug}` : `/breed/${item.slug}`;
  const strong = label === 'Great match';

  return (
    <Link to={to} className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-56 h-44 sm:h-auto bg-gray-100 shrink-0">
          {image ? (
            <FramedImage src={image} alt={item.name} loading="lazy" className="absolute inset-0 w-full h-full" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {kind === 'cat' ? <CatIcon className="size-10 text-blue-600" /> : <DogIcon className="size-10 text-blue-600" />}
            </div>
          )}
          <span className="absolute top-3 left-3 size-7 rounded-full bg-gray-900/80 text-white text-xs font-semibold flex items-center justify-center">
            {rank}
          </span>
        </div>
        <div className="p-4 sm:p-5 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold group-hover:text-blue-700 transition-colors">{item.name}</h3>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${strong ? 'bg-green-100 text-green-800' : 'bg-blue-50 text-blue-800'}`}>
              {label}
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            {item.group} · {item.size} · {item.lifespan}
          </p>
          <ul className="flex flex-col gap-1.5 mb-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckIcon className="size-4 text-green-600 shrink-0 mt-0.5" stroke={2.5} /> {r}
              </li>
            ))}
          </ul>
          {cautions.map((c) => (
            <p key={c} className="flex items-start gap-2 text-xs text-amber-800 bg-amber-50 rounded-lg px-3 py-2 mb-3">
              <AlertIcon className="size-4 shrink-0" /> Keep in mind: {c}
            </p>
          ))}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-700">
            Read the full guide <ArrowRightIcon className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Results({ answers }) {
  const [copied, setCopied] = useState(false);
  const matches = useMemo(() => getMatches(answers, 5), [answers]);
  const petName = answers.pet === 'cat' ? 'cat' : 'dog';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', window.location.href);
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold mb-1">Your top {petName} matches</h2>
      <p className="text-sm text-gray-500 mb-6">
        Based on your home, lifestyle and the personality you want. Best match first.
      </p>

      <div className="flex flex-col gap-4 mb-8">
        {matches.map((m, i) => (
          <MatchCard key={m.item.slug} m={m} rank={i + 1} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link to="/match">
          <button className="px-5 h-10 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors inline-flex items-center gap-2">
            <RefreshIcon className="size-4" /> Retake the quiz
          </button>
        </Link>
        <button
          type="button"
          onClick={copy}
          className="px-5 h-10 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
        >
          <LinkIcon className="size-4" /> {copied ? 'Link copied' : 'Copy link to share'}
        </button>
        <Link to={answers.pet === 'cat' ? '/cats' : '/breeds'}>
          <button className="px-5 h-10 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Browse all {petName} breeds
          </button>
        </Link>
      </div>

      <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-xs text-gray-600 leading-relaxed">
        These matches use typical breed traits: size, exercise needs, grooming and temperament. Every animal is
        an individual, so treat this as a starting point and read each guide. If you plan to adopt, many shelter
        pets are mixed-breed, and the traits you chose here are still a good guide to what to ask about. This is
        general information, not veterinary or adoption advice.
      </div>
    </div>
  );
}

export default function BreedMatcher() {
  const [params, setParams] = useSearchParams();
  const answers = useMemo(() => answersFromParams(params), [params]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHero
        image={matchHero}
        badge="Breed matcher"
        title="Find the pet that fits your life"
        subtitle="Answer a few quick questions and we will suggest breeds that suit your home and lifestyle."
      />
      <div className="max-w-2xl mx-auto w-full px-6 py-8 md:py-10 flex-1">
        {answers ? (
          <Results answers={answers} />
        ) : (
          <Quiz
            onFinish={(a) => {
              setParams(paramsFromAnswers(a));
              window.scrollTo({ top: 0 });
            }}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
