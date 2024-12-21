import { Note } from './Note.type';

export function NoteReducer(
  notes: Note[],
  action: {
    type: string;
    id: string;
  }
) {
  switch (action.type) {
    case 'added': {
      const exists = notes.some((note) => note.id === action.id);
      if (exists) {
        return notes;
      }
      return [
        ...notes,
        {
          id: action.id,
          enable: true,
        },
      ];
    }
    case 'deleted': {
      return notes.filter((note) => note.id !== action.id);
    }
    case 'disabled': {
      return notes.map((note) => {
        if (note.id === action.id) {
          return { ...note, enable: false };
        } else {
          return note;
        }
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
