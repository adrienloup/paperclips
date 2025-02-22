import { classNames } from '@/src/generic/utils/classNames';
import { Feature } from '@/src/game/components/feature/Feature.type';
import styles from '@/src/game/components/feature/Feature.module.scss';

export const FeatureComponent = ({ children, animate, onAnimationEnd }: Feature) => {
  return (
    <div
      className={classNames([styles.feature, animate ? styles.animate : ''])}
      onAnimationEnd={onAnimationEnd!}
    >
      {children}
    </div>
  );
};
