import { Status } from '@/src/generic/types/Status.type.ts';

export interface Alert {
  id?: number;
  text?: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}
