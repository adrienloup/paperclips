import { classNames } from '../../../generic/utils/classNames';
import { ButtonComponent } from '../../../generic/components/button/Button.component';
import { Project } from './Project.type';
import styles from './Project.module.scss';

export const ProjectComponent = ({ title, text, active, onClick, onAnimationEnd }: Project) => {
  return (
    <div className={classNames([styles.project, active ? styles.active : ''])} onAnimationEnd={onAnimationEnd!}>
      <div className={styles.title}>{title}</div>
      <p className={styles.text}>{text}</p>
      <ButtonComponent onClick={onClick} className={styles.button}>
        button
      </ButtonComponent>
    </div>
  );
};
