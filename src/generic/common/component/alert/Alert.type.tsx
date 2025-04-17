import { Status } from '@/src/generic/type/Status.type.ts';

export interface Alert {
  id?: string;
  text?: string;
  timeout?: number;
  status?: Status;
  close?: boolean;
  remove?: () => void;
}
