export type IconName =
  | 'phone'
  | 'shield'
  | 'harness'
  | 'truck'
  | 'leaf'
  | 'saw'
  | 'hedge'
  | 'stump'
  | 'brush'
  | 'check'
  | 'arrow-right'
  | 'map-pin'
  | 'clock'
  | 'alert'
  | 'chevron-down'
  | 'menu'
  | 'close'
  | 'euro';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Crumb {
  label: string;
  href?: string;
}
