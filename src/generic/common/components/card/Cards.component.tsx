import { classNames } from '@/src/generic/utils/classNames.ts';
import { Cards } from '@/src/generic/common/components/card/Cards.type.ts';
import styles from '@/src/generic/common/components/card/Cards.module.scss';

export const CardsComponent = ({ children, className }: Cards) => {
  return <div className={classNames([styles.cards, className])}>{children}</div>;
};
