import {
  IconShieldCheck,
  IconBone,
  IconStethoscope,
  IconSchool,
  IconScissors,
  IconBook,
} from '@tabler/icons-react';

export const categoryMeta = {
  Insurance: { icon: IconShieldCheck, bg: 'bg-green-600', color: 'text-white' },
  Nutrition: { icon: IconBone, bg: 'bg-amber-600', color: 'text-white' },
  Health: { icon: IconStethoscope, bg: 'bg-blue-600', color: 'text-white' },
  Training: { icon: IconSchool, bg: 'bg-red-500', color: 'text-white' },
  Grooming: { icon: IconScissors, bg: 'bg-purple-600', color: 'text-white' },
};

export const defaultCategoryMeta = { icon: IconBook, bg: 'bg-gray-600', color: 'text-white' };

export function getCategoryMeta(category) {
  return categoryMeta[category] || defaultCategoryMeta;
}