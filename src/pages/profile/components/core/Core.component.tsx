import { useTranslation } from 'react-i18next';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { TimeComponent } from '@/src/pages/profile/components/time/Time.component.tsx';

export const CoreComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleComponent>{t('profile.title')}</TitleComponent>
      <TimeComponent />
    </>
  );
};
