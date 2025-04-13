import { classNames } from '@/src/generic/utils/classNames.ts';
import { Cards } from '@/src/generic/common/components/cards/Cards.type.ts';
import styles from '@/src/generic/common/components/cards/Cards.module.scss';

export const CardsComponent = ({ children, direction = 'column', className }: Cards) => {
  return (
    <div
      className={classNames([styles.cards, className])}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  );
};
