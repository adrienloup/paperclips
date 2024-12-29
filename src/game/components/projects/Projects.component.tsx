import { useTranslation } from 'react-i18next';
import { useGame } from '../../useGame';
import { CardComponent } from '../../../generic/components/card/Card.component';
import styles from './Projects.module.scss';

function ProjectsComponent() {
  const { t } = useTranslation();
  const game = useGame();

  return (
    <>
      {game.feature.trust ? (
        <CardComponent className={styles.card}>
          <h2 className={styles.title}>{t('game.projects')}</h2>
        </CardComponent>
      ) : null}
    </>
  );
}

export default ProjectsComponent;
