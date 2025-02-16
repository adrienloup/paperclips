import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
//import { ProjectComponent } from '@/src/game/components/projects/Project.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

/*
  Limerick (10 créativité) (+1 confiance)
  Traitement Lexical (50 créativité) (+1 confiance)
  Combinatoires Harmoniques (100 créativité) (+1 confiance)
  Le Problème Hadwiger (150 creat) (+1 trust)
  La Conjecture Tón Saucisse (200 creat) (+1 trust)
  Donkey Espace (250 creat) (+1 trust)
  Prise de contrôle d'Hostile ($1.000.000) (+1 trust)
  Le Monopoly complet (1.000 yomi, $10M) (+1 trust)
  Cohérente Extrapolée Volition (1000 yomi, 500 creat, 20k ops) (+1 trust)
  Mâle Modèle Calvitie (20.000 ops) (+20 trust)
  Cure pour Cancer (25.000 op) (+10 trust)
  La Paix mondiale (5.000 yomi30.000 Ops) (+12 trust)
  Réchauffement Global (1.500 yomi, 50.000 ops) (+15 trust)
  Un signe de bonne volonté... ($500.000) (+1 trust)
  Un autre Signe de Bonne Volonté.. (+1 trust, répétable jusqu'à Trust 100)
*/

export const ProjectsComponent = () => {
  return (
    <CardComponent className={styles.cardD}>
      <TitleComponent title="Projects" />
      {/*{dashboard.feature.revTracker.enabled ? (*/}
      {/*  <ProjectComponent*/}
      {/*    title="Rev Tracker 1"*/}
      {/*    text="Automatically calculates average revenue per second"*/}
      {/*    incurred={dashboard.feature.revTracker.incurred}*/}
      {/*    onClick={onRevTrackerClick}*/}
      {/*    onAnimationEnd={onRevTrackerAnimationEnd}*/}
      {/*  />*/}
      {/*) : null}*/}
      {/*{dashboard.feature.improvedProduction.enabled ? (*/}
      {/*  <ProjectComponent*/}
      {/*    title="Improved Production"*/}
      {/*    text="Increases Production performance 25%"*/}
      {/*    incurred={dashboard.feature.revTracker.incurred}*/}
      {/*    onClick={onImprovedProductionClick}*/}
      {/*    onAnimationEnd={onImprovedProductionAnimationEnd}*/}
      {/*  />*/}
      {/*) : null}*/}
    </CardComponent>
  );
};
