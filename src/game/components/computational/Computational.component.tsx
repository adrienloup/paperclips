import { Computational } from '@/src/game/components/computational/Computational.type';
import { CardComponent } from '@/src/common/components/cards/Card.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';

/*
  trust:
  trombones
  +1: 2k
  +1: 3k
  +1: 5k
  +1: 8k
  +1: 13k
  +10: 89k
  +13: 377k
  +15: 987k
  +20: 11M
  +25: 121M
  +30: 1.3Md
  +35: 14.9Md
  projets
  +1: Beg pour Plus de fil
  +1: Hypno Harmoniques
  +100 Relâchez les HypnoDrones

  opérations:
  500: 1 mémoires (limite d'opérations)
  750: 2
  1750: 3
  2500: 4
  3500: 5
  4500: 6
  5000: 7
  ...

  processeurs < trust et projet
  mémoires < trust et projet

  opération > processor +10/S d'opération
  1000/1000
  processeur / mémory (limit)
  crativité > projets
  quand opération limit max = +1 créativité
*/

export const ComputationalComponent = ({ dashboard }: Computational) => {
  return (
    <CardComponent>
      <TitleComponent title="Computational Resources" />
      <p>Trust level {dashboard.trust}</p>
      <p>+1 Trust at: 8,000 clips</p>
      <div>processors: 1</div>
      <div>memory: 1</div>
      <div>operations: 500/500</div>
      <div>crativity: 1</div>
    </CardComponent>
  );
};
