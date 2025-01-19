import { classNames } from '@/src/generic/utils/classNames';
import { Title } from '@/src/common/components/title/Title.type';
import styles from './Title.module.scss';

export const TitleComponent = ({ className, title, tag: Tag = 'h2' }: Title) => {
  return <Tag className={classNames([styles.title, className])}>{title}</Tag>;
};
