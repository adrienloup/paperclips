import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Children } from '../../types/Children.type';
import { Note } from './Note.type';
import { NoteContext, NoteDispatchContext } from './Note.context';
import { NoteReducer } from './Note.reduceur';

export function NoteProvider({ children }: { children: Children }) {
  const [localNotes, setLocalNotes] = useLocalStorage<Note[]>(
    '_notes_3mma_0',
    []
  );
  const [notes, setNote] = useReducer(NoteReducer, localNotes);

  useEffect(() => {
    setLocalNotes(notes);
  }, [notes]);

  return (
    <NoteContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={setNote}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
}
