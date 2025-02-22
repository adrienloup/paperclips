import { classNames } from '@/src/generic/utils/classNames';
import { Project } from '@/src/game/components/projects/Project.type';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import styles from '@/src/game/components/projects/Project.module.scss';

export const ProjectComponent = ({
  title,
  text,
  animate,
  disabled,
  onClick,
  onAnimationEnd,
}: Project) => {
  return (
    <ButtonComponent
      className={classNames([styles.project, animate ? styles.animate : ''])}
      disabled={disabled}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd!}
    >
      <div className={styles.title}>{title}</div>
      <p className={styles.text}>{text}</p>
    </ButtonComponent>
  );
};
