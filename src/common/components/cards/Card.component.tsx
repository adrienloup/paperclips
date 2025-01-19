import { classNames } from '@/src/generic/utils/classNames';
import { Card } from '@/src/common/components/cards/Card.type';
import styles from '@/src/common/components/cards/Card.module.scss';

export const CardComponent = ({ children, className }: Card) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
