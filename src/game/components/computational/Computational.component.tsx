import { Computational } from '@/src/game/components/computational/Computational.type';
import { CardComponent } from '@/src/common/components/cards/Card.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';

export const ComputationalComponent = ({ dashboard }: Computational) => {
  return (
    <CardComponent>
      <TitleComponent title="Computational Resources" />
      <p>Trust level {dashboard.trust}</p>
      <p>+1 Trust at: 8,000 clips</p>
    </CardComponent>
  );
};
