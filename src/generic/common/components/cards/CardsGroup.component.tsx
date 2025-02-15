import { classNames } from '@/src/generic/utils/classNames';
import { CardsGroup } from '@/src/generic/common/components/cards/CardsGroup.type.ts';
import styles from '@/src/generic/common/components/cards/CardsGroup.module.scss';

export const CardsGroupComponent = ({ children, className }: CardsGroup) => {
  return <div className={classNames([styles.cardsGroup, className])}>{children}</div>;
};
