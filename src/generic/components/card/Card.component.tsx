import { classNames } from '../../utils/classNames';
import { Card } from './Card.type';
import styles from './Card.module.scss';

export const CardComponent = ({ children, className }: Card) => {
  return <div className={classNames([styles.card, className])}>{children}</div>;
};
