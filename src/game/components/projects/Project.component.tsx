import { classNames } from '@/src/generic/utils/classNames';
import { Project } from '@/src/game/components/projects/Project.type';
import { ButtonComponent } from '@/src/common/components/button/Button.component';
import styles from '@/src/game/components/projects/Project.module.scss';

export const ProjectComponent = ({ title, text, active, onClick, onAnimationEnd }: Project) => {
  return (
    <div
      className={classNames([styles.project, active ? styles.active : ''])}
      onAnimationEnd={onAnimationEnd!}
    >
      <div className={styles.title}>{title}</div>
      <p className={styles.text}>{text}</p>
      <ButtonComponent onClick={onClick} className={styles.button}>
        button
      </ButtonComponent>
    </div>
  );
};
