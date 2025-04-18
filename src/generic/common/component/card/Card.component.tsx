import { classNames } from '@/src/generic/utils/classNames.ts';
import { Card } from '@/src/generic/common/component/card/Card.type.ts';
import styles from '@/src/generic/common/component/card/Card.module.scss';

export const CardComponent = ({ children, className }: Card) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
