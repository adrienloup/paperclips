import { useTranslation } from 'react-i18next';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/pages/game/components/dashboard/Dashboard.module.scss';

function IntroductionComponent() {
  const { t } = useTranslation();

  return (
    <article className={styles.introduction}>
      <TitleComponent>{t('page.title')}</TitleComponent>
    </article>
  );
}

export default IntroductionComponent;
