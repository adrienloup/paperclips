import { classNames } from '@/src/generic/utils/classNames.ts';
import { Card } from '@/src/generic/common/components/cards/card/Card.type.ts';
import styles from '@/src/generic/common/components/cards/card/Card.module.scss';

export const CardComponent = ({ children, className, ...props }: Card) => {
  return (
    <div
      className={classNames([styles.card, className])}
      {...props}
    >
      {children}
    </div>
  );
};
