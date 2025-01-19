import { useTranslation } from 'react-i18next';
import { Manufacturing } from '@/src/game/components/manufacturing/Manufacturing.type';
import { CardComponent } from '@/src/common/components/cards/Card.component';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { DialComponent } from '@/src/common/components/dial/Dial.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';
import { ButtonComponent } from '@/src/common/components/button/Button.component';
import styles from '@/src/common/components/cards/Card.module.scss';
import { BonusComponent } from '@/src/common/components/bonus/Bonus.component.tsx';

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
        className={styles.button}
        onClick={makeClip}
        disabled={dashboard.wireStock < 1}
      >
        Fabriquer
      </ButtonComponent>
      <div className={styles.group}>
        <DialComponent number={dashboard.wireCost} style="currency" label={t('Prix fil de fer')} />
        <DialComponent
          number={dashboard.wireStock}
          notation="compact"
          outStock={dashboard.wireStock < dashboard.autoClippers}
          label={
            dashboard.wireStock === 0
              ? 'Out of stock'
              : dashboard.wireStock < dashboard.autoClippers
                ? 'Low stock'
                : 'Stock fil de fer'
          }
        />
      </div>
      <div className={styles.group}>
        <ButtonComponent
          className={styles.button}
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
        <>
          <div className={styles.group}>
            <DialComponent
              number={dashboard.autoClippersCost}
              style="currency"
              label={t('Prix machine')}
            />
            <DialComponent number={dashboard.autoClippers} notation="compact" label="Machines" />
          </div>
          <ButtonComponent
            className={styles.button}
            onClick={buyAutoClippers}
            disabled={dashboard.funds < dashboard.autoClippersCost}
          >
            Acheter
          </ButtonComponent>
        </>
      ) : null}
    </CardComponent>
  );
};
