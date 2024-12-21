import { useTranslation } from 'react-i18next';
import { Note } from '../../../generic/components/note/Note.type';
import {
  useNote,
  useNoteDispatch,
} from '../../../generic/components/note/useNote';
import { NoteComponent } from '../../../generic/components/note/Note.component';
import styles from './Explore.module.scss';

function ExploreComponent() {
  const { t } = useTranslation();
  const notes = useNote();
  const setNote = useNoteDispatch();

  return (
    <div className={styles.explore}>
      {notes.map((note: Note) => (
        <NoteComponent
          key={note.id}
          id={note.id}
          label={t(`game.note.${note.id}`)}
          enable={note.enable}
          onAnimationEnd={() => {
            setNote({
              type: 'disabled',
              id: note.id,
            });
          }}
        />
      ))}
    </div>
  );
}

export default ExploreComponent;
