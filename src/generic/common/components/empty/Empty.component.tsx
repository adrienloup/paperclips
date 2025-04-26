import { useTranslation } from 'react-i18next';
import { classNames } from '@/src/generic/utils/classNames.ts';
import styles from '@/src/generic/common/components/empty/Empty.module.scss';

export const EmptyComponent = ({ className, empty }: { className?: string; empty: string }) => {
  const { t } = useTranslation();
  return <span className={classNames([styles.empty, className])}>{t(empty)}</span>;
};
