import { classNames } from '@/src/generic/utils/classNames.ts';
import { Cards } from '@/src/generic/common/component/cards/Cards.type.ts';
import styles from '@/src/generic/common/component/cards/Cards.module.scss';

export const CardsComponent = ({ children, direction = 'row', className }: Cards) => {
  return (
    <div
      className={classNames([styles.cards, className])}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  );
};
