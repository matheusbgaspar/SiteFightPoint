/** Modelos de dados compartilhados do site da Fight Point. */

export interface Modality {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  benefits: string[];
}

export interface ScheduleDay {
  key: string;
  label: string;
}

export interface ScheduleSlot {
  dayKey: string;
  time: string;
  modality: string;
  modalityId: string;
  info?: string;
}

export interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}
