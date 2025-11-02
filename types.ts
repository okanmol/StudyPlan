
export interface WeekDetails {
  phase: string;
  title: string;
  focus: string;
  topics: string;
  weekday: string;
  weekend: string;
}

export type PlanData = Record<number, WeekDetails>;

export type PhaseKey = 'system-design' | 'dsa' | 'mlops' | 'ml';

export interface Phase {
  title: string;
  weeks: number[];
  theme: {
    name: PhaseKey;
    border: string;
    text: string;
    bg: string;
    hoverBg: string;
    activeBg: string;
    activeShadow: string;
  };
}
