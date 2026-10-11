import {
  IconShieldCheck,
  IconBone,
  IconStethoscope,
  IconSchool,
  IconScissors,
  IconBook,
} from '@tabler/icons-react';

export const categoryMeta = {
  Insurance: { icon: IconShieldCheck, bg: 'bg-green-100', color: 'text-green-700' },
  Nutrition: { icon: IconBone, bg: 'bg-amber-100', color: 'text-amber-700' },
  Health: { icon: IconStethoscope, bg: 'bg-blue-100', color: 'text-blue-700' },
  Training: { icon: IconSchool, bg: 'bg-red-100', color: 'text-red-700' },
  Grooming: { icon: IconScissors, bg: 'bg-purple-100', color: 'text-purple-700' },
};

export const defaultCategoryMeta = { icon: IconBook, bg: 'bg-gray-100', color: 'text-gray-600' };

export function getCategoryMeta(category) {
  return categoryMeta[category] || defaultCategoryMeta;
}