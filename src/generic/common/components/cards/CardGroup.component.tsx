import { classNames } from '@/src/generic/utils/classNames';
import { CardGroup } from '@/src/generic/common/components/cards/CardGroup.type';
import styles from '@/src/generic/common/components/cards/CardGroup.module.scss';

export const CardGroupComponent = ({ children, className, direction = 'row' }: CardGroup) => {
  return <div className={classNames([styles.cardGroup, className, styles[direction]])}>{children}</div>;
};
