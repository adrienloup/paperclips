import { Title } from '@/src/generic/common/components/title/Title.type';

export const TitleComponent = ({ className, children, tag: Tag = 'h1', title }: Title) => {
  return (
    <Tag
      className={className}
      title={title}
    >
      {children}
    </Tag>
  );
};
