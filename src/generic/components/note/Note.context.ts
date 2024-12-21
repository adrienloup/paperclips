import { createContext, Dispatch } from 'react';
import { Note } from './Note.type';

export const NoteContext = createContext<Note[]>([]);

export const NoteDispatchContext = createContext<
  Dispatch<{
    id: string;
    type: string;
  }>
>(() => {});
