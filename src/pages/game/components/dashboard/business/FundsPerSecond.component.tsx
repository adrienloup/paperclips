import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';

export const FundsPerSecondComponent = () => {
  return (
    <DialsComponent>
      <DialComponent
        value={0}
        style="currency"
        notation="compact"
        label="funds per second"
      />
    </DialsComponent>
  );
};
