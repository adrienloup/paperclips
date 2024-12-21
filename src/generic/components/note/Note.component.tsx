import { classNames } from '../../utils/classNames';
import { Note } from './Note.type';
import { ButtonComponent } from '../button/Button.component';
import { IconComponent } from '../icon/Icon.component';
import styles from './Note.module.scss';

export const NoteComponent = ({ label, enable, onAnimationEnd }: Note) => {
  return (
    <ButtonComponent
      className={classNames([styles.note, enable ? styles.enable : ''])}
      onAnimationEnd={onAnimationEnd!}
    >
      {label}
      <IconComponent className={styles.icon} icon="info" />
    </ButtonComponent>
  );
};
