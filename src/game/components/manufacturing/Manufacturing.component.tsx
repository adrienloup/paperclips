import { useTranslation } from 'react-i18next';
import { Manufacturing } from '@/src/game/components/manufacturing/Manufacturing.type';
import { CardComponent } from '@/src/common/components/cards/Card.component';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { DialComponent } from '@/src/common/components/dial/Dial.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';
import { ButtonComponent } from '@/src/common/components/button/Button.component';
import { BonusComponent } from '@/src/common/components/bonus/Bonus.component';
import cardStyles from '@/src/common/components/cards/Card.module.scss';
import manufacturingStyles from '@/src/game/components/manufacturing/Manufacturing.module.scss';

export const ManufacturingComponent = ({
  dashboard,
  makeClip,
  buyAutoClippers,
  buyWire,
}: Manufacturing) => {
  const { t } = useTranslation();

  return (
    <CardComponent>
      <TitleComponent title="Manufacturing" />
      <DialComponent number={dashboard.clipsPerSecond} label={t('common.per_second')} />
      <ButtonComponent
        className={cardStyles.button}
        onClick={makeClip}
        disabled={dashboard.wireStock < 1}
      >
        Fabriquer
      </ButtonComponent>
      <div className={cardStyles.group}>
        <DialComponent number={dashboard.wireCost} style="currency" label={t('Prix fil de fer')} />
        <DialComponent
          number={dashboard.wireStock}
          notation="compact"
          outStock={dashboard.wireStock < dashboard.autoClippers}
          label="Stock fil de fer"
        />
      </div>
      <div className={cardStyles.group}>
        <ButtonComponent
          className={cardStyles.button}
          onClick={buyWire}
          disabled={dashboard.funds < dashboard.wireCost}
        >
          Acheter
        </ButtonComponent>
        <NumberComponent number={Math.round(dashboard.wireBonus * 1e4)} notation="compact" /> inches
        {dashboard.wireBonus > 0.1 ? (
          <BonusComponent number={dashboard.wireBonus} style="percent" />
        ) : null}
      </div>
      {dashboard.feature.autoClippers.enabled ? (
        <div className={manufacturingStyles.autoClippers}>
          <div className={cardStyles.group}>
            <DialComponent
              number={dashboard.autoClippersCost}
              style="currency"
              label={t('Prix machine')}
            />
            <DialComponent number={dashboard.autoClippers} notation="compact" label="Machines" />
          </div>
          <ButtonComponent
            className={cardStyles.button}
            onClick={buyAutoClippers}
            disabled={dashboard.funds < dashboard.autoClippersCost}
          >
            Acheter
          </ButtonComponent>
        </div>
      ) : null}
    </CardComponent>
  );
};
