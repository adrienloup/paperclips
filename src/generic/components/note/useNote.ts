import { useContext } from 'react';
import { NoteContext, NoteDispatchContext } from './Note.context';

export function useNote() {
  return useContext(NoteContext);
}

export function useNoteDispatch() {
  return useContext(NoteDispatchContext);
}
