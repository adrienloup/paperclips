import { classNames } from '@/src/generic/utils/classNames.ts';
import { Title } from '@/src/generic/common/components/title/Title.type.ts';
import styles from '@/src/generic/common/components/title/Title.module.scss';

export const TitleComponent = ({ className, children, tag: Tag = 'h1' }: Title) => {
  return <Tag className={classNames([styles.title, className])}>{children}</Tag>;
};
