import { useTranslation } from 'react-i18next';

export const EmptyComponent = ({ className, empty }: { className?: string; empty: string }) => {
  const { t } = useTranslation();
  return <span className={className}>{t(empty)}</span>;
};
