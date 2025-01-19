import { useTranslation } from 'react-i18next';
import { Manufacturing } from '@/src/game/components/manufacturing/Manufacturing.type';
import { CardComponent } from '@/src/common/components/card/Card.component';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { DialComponent } from '@/src/common/components/dial/Dial.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';
import { ButtonComponent } from '@/src/common/components/button/Button.component';
import styles from '@/src/common/components/card/Card.module.scss';

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
      <DialComponent
        value={<NumberComponent number={dashboard.clipsPerSecond} />}
        label={t('common.per_second')}
      />
      <ButtonComponent
        className={styles.button}
        onClick={makeClip}
        disabled={dashboard.wireStock < 1}
      >
        Fabriquer
      </ButtonComponent>
      <div className={styles.group}>
        <DialComponent
          value={<NumberComponent number={dashboard.wireCost} style="currency" />}
          label={t('Prix fil de fer')}
        />
        <DialComponent
          value={<NumberComponent number={dashboard.wireStock} notation="compact" />}
          label={t('Stock Fil de Fer')}
        />
        {dashboard.wireStock < dashboard.autoClippers ? 'Empty stock!' : ''}
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
          <>
            (+
            <NumberComponent number={Math.round(dashboard.wireBonus * 100)} />
            %)
          </>
        ) : null}
      </div>
      <div className={styles.group}>
        <DialComponent
          value={<NumberComponent number={dashboard.autoClippersCost} style="currency" />}
          label={t('Prix machine')}
        />
        <DialComponent
          value={<NumberComponent number={dashboard.autoClippers} />}
          label={t('Machine')}
        />
      </div>
      <ButtonComponent
        className={styles.button}
        onClick={buyAutoClippers}
        disabled={dashboard.funds < dashboard.autoClippersCost}
      >
        Acheter
      </ButtonComponent>
    </CardComponent>
  );
};
