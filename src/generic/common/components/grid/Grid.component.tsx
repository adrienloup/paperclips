import { classNames } from '@/src/generic/utils/classNames.ts';
import { Grid } from '@/src/generic/common/components/grid/Grid.type.ts';
import styles from '@/src/generic/common/components/grid/Grid.module.scss';

export const GridComponent = ({ children, className }: Grid) => {
  return <div className={classNames([styles.grid, className])}>{children}</div>;
};
