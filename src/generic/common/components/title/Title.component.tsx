import { Title } from '@/src/generic/common/components/title/Title.type';

export const TitleComponent = ({ className, title, tag: Tag = 'h2' }: Title) => {
  return <Tag className={className}>{title}</Tag>;
};
