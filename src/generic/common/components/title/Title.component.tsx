import { classNames } from '@/src/generic/utils/classNames';
import { Title } from '@/src/generic/common/components/title/Title.type';
import styles from '@/src/generic/common/components/title/Title.module.scss';

export const TitleComponent = ({ className, title, tag: Tag = 'h2' }: Title) => {
  return <Tag className={classNames([styles.title, className])}>{title}</Tag>;
};
