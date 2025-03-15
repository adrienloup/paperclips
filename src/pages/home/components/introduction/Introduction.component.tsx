import { useTranslation } from 'react-i18next';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import styles from '@/src/pages/home/components/introduction/Introduction.module.scss';

function IntroductionComponent() {
  const { t } = useTranslation();

  return (
    <article className={styles.introduction}>
      <TitleComponent>{t('home.title1')}</TitleComponent>
      <TitleComponent tag="h2">{t('home.title2')}</TitleComponent>
      <div
        className={styles.test}
        title="Paperclips"
      >
        Paperclips
      </div>
    </article>
  );
}

export default IntroductionComponent;
