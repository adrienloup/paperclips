import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Project } from '@/src/pages/game/components/project/Project.type';
import styles from '@/src/pages/game/components/project/Project.module.scss';

export const ProjectComponent = ({ title, text, path, animate, onClick, onAnimationEnd }: Project) => {
  //console.log('ProjectComponent');
  return (
    <div
      className={classNames([styles.project, animate ? styles.animate : ''])}
      onAnimationEnd={onAnimationEnd!}
    >
      <ButtonComponent
        className={styles.link}
        to={`/paperclips/explore/${path}`}
      >
        <span>{title}</span> {text}
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={onClick}
      >
        <IconComponent
          className={styles.icon}
          icon="cancel"
        />
      </ButtonComponent>
    </div>
  );
};
