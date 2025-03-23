import { Status } from '@/src/generic/types/Status.type.ts';

export interface Alert {
  id: number;
  title?: string;
  text?: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}

export type Action = { type: 'ADD'; alert: Alert } | { type: 'REMOVE'; id: number };

export type State = Alert[];
