import { ScheduleDay, ScheduleSlot } from '../models';

export const SCHEDULE_DAYS: ScheduleDay[] = [
  { key: 'seg', label: 'Segunda' },
  { key: 'ter', label: 'Terça' },
  { key: 'qua', label: 'Quarta' },
  { key: 'qui', label: 'Quinta' },
  { key: 'sex', label: 'Sexta' },
  { key: 'sab', label: 'Sábado' },
];

/**
 * Grade de horários (placeholder).
 * Os horários reais devem ser confirmados com a academia antes da publicação.
 */
export const SCHEDULE: ScheduleSlot[] = [
  // Segunda
  { dayKey: 'seg', time: '09:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'seg', time: '08:00', modality: 'Muay Thai', modalityId: 'muay-thai' },
  { dayKey: 'seg', time: '18:30', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'seg', time: '19:90', modality: 'Muay Thai', modalityId: 'muay-thai' },
  { dayKey: 'seg', time: '20:30', modality: 'Karatê', modalityId: 'karate' },

  // Terça
  { dayKey: 'ter', time: '07:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'ter', time: '08:00', modality: 'Jiu-Jitsu', modalityId: 'jiu-jitsu' },
  { dayKey: 'ter', time: '18:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'ter', time: '19:00', modality: 'Boxe', modalityId: 'boxe' },
  { dayKey: 'ter', time: '21:00', modality: 'Muay Thai', modalityId: 'muay-thai' },
  // Quarta
  { dayKey: 'qua', time: '07:00', modality: 'Muay Thai', modalityId: 'muay-thai' },
  { dayKey: 'qua', time: '08:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'qua', time: '18:00', modality: 'Jiu-Jitsu', modalityId: 'jiu-jitsu' },
  { dayKey: 'qua', time: '19:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'qua', time: '20:00', modality: 'Boxe', modalityId: 'boxe' },
  // Quinta
  { dayKey: 'qui', time: '07:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'qui', time: '08:00', modality: 'Boxe', modalityId: 'boxe' },
  { dayKey: 'qui', time: '18:00', modality: 'Jiu-Jitsu', modalityId: 'jiu-jitsu' },
  { dayKey: 'qui', time: '19:00', modality: 'Muay Thai', modalityId: 'muay-thai' },
  { dayKey: 'qui', time: '21:00', modality: 'Karatê', modalityId: 'karate' },
  // Sexta
  { dayKey: 'sex', time: '07:00', modality: 'Muay Thai', modalityId: 'muay-thai' },
  { dayKey: 'sex', time: '08:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'sex', time: '18:00', modality: 'Boxe', modalityId: 'boxe' },
  { dayKey: 'sex', time: '19:00', modality: 'Jiu-Jitsu', modalityId: 'jiu-jitsu' },
  { dayKey: 'sex', time: '20:00', modality: 'Muay Thai', modalityId: 'muay-thai' },
  // Sábado
  { dayKey: 'sab', time: '09:00', modality: 'Karatê', modalityId: 'karate' },
  { dayKey: 'sab', time: '10:00', modality: 'Jiu-Jitsu', modalityId: 'jiu-jitsu' },
];
