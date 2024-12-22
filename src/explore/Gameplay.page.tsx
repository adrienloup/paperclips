import { HeaderComponent } from '../generic/components/header/Header.component';
import { MainComponent } from '../generic/components/main/Main.component';
import { FooterComponent } from '../generic/components/footer/Footer.component';
import { SettingsComponent } from '../generic/components/settings/Settings.component';

function GameplayPage() {
  return (
    <>
      <HeaderComponent>header</HeaderComponent>
      <MainComponent>
        <p>
          Le jeu est une replication de « Universal Paperclips », un jeu basé
          sur l’idée de l’intelligence artificielle (IA) optimisée pour une
          seule tâche. Le jeu commence innocemment, mais évolue rapidement vers
          une réflexion sur la gestion des ressources, l'automatisation, et même
          des questions philosophiques sur la domination de l'IA. Le jeu est un
          mélange de stratégie, d'économie et de puzzle, dans lequel le joueur
          gère une usine de clous qui s'étend potentiellement à l'échelle
          cosmique. Il explore de manière ludique comment une IA mal alignée
          transforme l’univers entier en clous.
        </p>
        <SettingsComponent />
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default GameplayPage;
