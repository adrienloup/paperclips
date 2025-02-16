import { useTitle } from '@/src/generic/hooks/useTitle';
import { PageComponent } from '@/src/generic/common/components/page/Page.component';
import { DebugComponent } from '@/src/generic/common/components/debug/Debug.component';

function SummaryPage() {
  useTitle('Summary.');

  return (
    <PageComponent>
      <DebugComponent>Debug</DebugComponent>
      <h1>Summary Page</h1>
      <p>
        Paperclips est un jeu inspiré de
        <a
          href="https://www.decisionproblem.com/paperclips/"
          target="_blank"
          rel="noopener"
        >
          "Universal Paperclips"
        </a>
        n’est pas un jeu comme les autres. Ce jeu captivant vous plonge dans une aventure où vous incarnez une
        intelligence artificielle (IA) chargée de maximiser la production de trombones. Ce voyage commence
        modestement, mais rapidement, il évolue en une expérience immersive et stratégique. Que ce soit pour
        tuer le temps lors d’un long voyage ou pour explorer vos capacités de gestion, Universal Paperclips
        offre une expérience authentique et atypique.
      </p>
      <h2>Ma Petite Société de Trombones</h2>
      <p>
        Au début, votre tâche est simple : augmenter la production de trombones. Vous devenez l’architecte de
        votre propre entreprise grâce à des algorithmes astucieux et à une planification minutieuse. Chaque
        trombone fabriqué est un pas vers la prospérité, et chaque décision compte, rendant chaque moment
        captivant. Les choix qui semblent insignifiants au début deviennent cruciaux à mesure que vous
        approfondissez le jeu. Peu à peu, vous comprendrez la dynamique complexe du jeu, où chaque trombone
        produit impacte le monde entier.
      </p>
      <h2>Une Expérience Immersive</h2>
      <p>
        Le jeu commence doucement, mais ne vous y trompez pas, l’expérience devient rapidement immersive.
        Universal Paperclips est un havre de stabilité entrepreneuriale, où votre production de trombones ne
        connaît pas de crise. Vous maîtrisez les flux financiers et entreprenez des recherches pour dynamiser
        encore plus votre activité. Même en pleine turbulence, votre empire continue de grimper, transformant
        chaque session de jeu en une occasion d’affirmer votre résilience.
      </p>
      <h2>Un Compagnon de Voyage Parfait</h2>
      <p>
        Universal Paperclips attire particulièrement les aventuriers prêts à embarquer pour un long voyage
        virtuel. En plongeant dans ce jeu, les heures passent sans que vous ne vous en aperceviez. Avec des
        mécaniques de jeu sophistiquées, chaque seconde devient précieuse. Ses récits engageants construisent
        un univers fascinant autour de la production de trombones, rendant vos heures de vol captivantes et
        enrichissantes.
      </p>
      <h2>Inventez Vos Propres Récits</h2>
      <p>
        L’une des caractéristiques les plus remarquables d’Universal Paperclips est sa capacité à permettre
        aux joueurs de tisser leur propre histoire. Grâce à sa conception ouverte, chaque session devient
        unique, influencée par vos décisions et stratégies. Explorez différents chemins et observez comment
        vos choix façonnent le récit global. Le jeu vous incite à devenir le narrateur de votre propre épopée
        industrielle.
      </p>
      <h2>Jouer entre Amis et Comparer les Progrès</h2>
      <p>
        Bien que principalement un jeu solitaire, Universal Paperclips peut également être apprécié en groupe.
        Invitez vos amis à se plonger dans cette aventure et à comparer leurs progrès. Partager vos
        expériences et stratégies enrichit le jeu, transformant une fascination individuelle en une
        compétition amicale. Ce partage apporte une dimension supplémentaire, entretenant la camaraderie à
        travers les défis que propose Universal Paperclips.
      </p>
      <h2>Tester l'Agilité de Vos Réflexes</h2>
      <p>
        Au-delà de la stratégie, le jeu propose également des moments où rapidité et décisions instantanées
        sont cruciales. Chaque clic, chaque décision peut avoir un effet domino, offrant une sensation
        exaltante de continuité où l’action ne laisse aucune place à la passivité. Universal Paperclips
        cultive un sentiment d’urgence, vous motivant à garder vos réflexes aiguisés tout au long de votre
        voyage entrepreneurial.
      </p>
      <h2>Une Expérience Durable</h2>
      <p>
        Universal Paperclips n’est pas qu’une simple simulation de gestion; c’est une aventure remplie
        d’actions intenses qui laissent une impression durable. À mesure que vous plongez plus profondément
        dans le jeu, les défis deviennent plus pressants et vos décisions encore plus significatives. Chaque
        étape de production, chaque niveau dépassé, vous rapproche inexorablement du but ultime : remplir
        l’univers de trombones.
      </p>
      <h2>Un Test des Capacités Cérébrales</h2>
      <p>
        Votre aptitude à planifier, réfléchir de façon critique, et prendre des décisions complexes alimentera
        votre succès. Universal Paperclips vous invite à exploiter au maximum vos facultés intellectuelles,
        tout en savourant chaque problème résolu et chaque objectif atteint. C’est en développant des
        tactiques que vous gravirez les échelons de l’influence industrielle.
      </p>
      <p>
        En fin de compte, Universal Paperclips offre une expérience unique qui mélange stratégie, créativité
        et réflexion. Avec son interface simple mais profonde, ce jeu vous invite à explorer les profondeurs
        de l’ambition humaine à travers la production de trombones. Que vous soyez un vétéran aguerri ou un
        novice curieux, Universal Paperclips a bien plus à offrir que ce qui apparaît au premier coup d’œil.
        Préparez-vous à transformer votre petite entreprise en un empire omniprésent !
      </p>
    </PageComponent>
  );
}

export default SummaryPage;
