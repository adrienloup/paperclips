import { classNames } from '@/src/generic/utils/classNames.ts';
import { CardGroup } from '@/src/generic/common/components/group/CardGroup.type.ts';
import styles from '@/src/generic/common/components/group/CardGroup.module.scss';

export const CardGroupComponent = ({ children, className, direction = 'row' }: CardGroup) => {
  return <div className={classNames([styles.cardGroup, className, styles[direction]])}>{children}</div>;
};
