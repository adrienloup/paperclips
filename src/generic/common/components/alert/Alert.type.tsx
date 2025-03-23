import { Status } from '@/src/generic/types/Status.type.ts';

export interface Alert {
  id: number;
  // enable?: boolean;
  title?: string;
  text?: string;
  status?: Status;
  // timeout?: number;
  // close?: boolean;
  // delete?: () => void;
}

export type Action = { type: 'ADD'; alert: Alert } | { type: 'DELETE'; id: number };

export type State = Alert[];
