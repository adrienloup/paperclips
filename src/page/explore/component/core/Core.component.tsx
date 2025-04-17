import { useTranslation } from 'react-i18next';
import { TitleComponent } from '@/src/generic/common/component/title/Title.component.tsx';

export const CoreComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleComponent>{t('explore.title')}</TitleComponent>
    </>
  );
};
