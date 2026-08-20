import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MODALITIES } from '../../core/data/modalities';
import { SCHEDULE, SCHEDULE_DAYS } from '../../core/data/schedule';

type ScheduleView = 'day' | 'modality';

@Component({
  selector: 'app-schedule',
  imports: [MatTabsModule, MatIconModule, MatButtonToggleModule, FormsModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class Schedule {
  readonly days = SCHEDULE_DAYS;
  readonly schedule = SCHEDULE;
  readonly modalities = MODALITIES;

  /** Visão ativa: por dia da semana ou por modalidade. */
  view: ScheduleView = 'day';

  /** Aulas de um dia, ordenadas por horário. */
  classesFor(dayKey: string) {
    return this.schedule
      .filter((s) => s.dayKey === dayKey)
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  /** Rótulo do dia (ex.: 'seg' → 'Segunda'). */
  dayLabel(dayKey: string): string {
    return this.days.find((d) => d.key === dayKey)?.label ?? dayKey;
  }

  /** Aulas de uma modalidade, ordenadas por dia da semana e horário. */
  slotsFor(modalityId: string) {
    const dayOrder = this.days.map((d) => d.key);
    return this.schedule
      .filter((s) => s.modalityId === modalityId)
      .sort(
        (a, b) =>
          dayOrder.indexOf(a.dayKey) - dayOrder.indexOf(b.dayKey) ||
          a.time.localeCompare(b.time),
      );
  }

  /** Classe CSS usada para colorir cada modalidade. */
  modClass(modalityId: string): string {
    return `mod-${modalityId}`;
  }
}
