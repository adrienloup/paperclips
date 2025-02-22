import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/game/repository/useGame';
import { CardComponent } from '@/src/generic/common/components/card/Card.component';
import { GroupComponent } from '@/src/generic/common/components/group/Group.component';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component';
import { BonusComponent } from '@/src/generic/common/components/bonus/Bonus.component';
import { FeatureComponent } from '@/src/game/components/feature/Feature.component';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const BusinessComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();

  return (
    <CardComponent
      className={styles.red}
      style={{
        gridColumn: '2',
        gridRow: 'span 2',
      }}
    >
      <TitleComponent
        className={styles.title}
        title="Business"
      />
      {game.fundsPerSecondFeature.open ? (
        <DialComponent
          value={game.fundsPerSecond}
          style="currency"
          label="Funds per second"
          animate={game.fundsPerSecondFeature.animate}
          onAnimationEnd={() =>
            setGame({
              type: 'UPDATE_FEATURE',
              feature: 'fundsPerSecondFeature',
              open: true,
              animate: false,
            })
          }
        />
      ) : null}
      <DialComponent
        value={game.funds}
        style="currency"
        label="Fonds disponibles"
      />
      <GroupComponent>
        <DialComponent
          value={game.clipsStock}
          notation="compact"
          label="Unsold Inventory"
        />
        <BonusComponent
          value={game.productionBonus}
          style="percent"
        />
      </GroupComponent>
      <GroupComponent>
        <DialComponent
          value={game.clipsCost}
          style="currency"
          label="Prix trombone"
        />
        <DialComponent
          value={game.publicDemand}
          style="percent"
          label="publicDemand"
        />
      </GroupComponent>
      <GroupComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.clipsCost === 1}
          onClick={() => setGame({ type: 'INCREASE_CLIPS_COST' })}
        >
          {t('common.button.raise')}
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          disabled={game.clipsCost === 0.1}
          onClick={() => setGame({ type: 'DECREASE_CLIPS_COST' })}
        >
          {t('common.button.lower')}
        </ButtonComponent>
      </GroupComponent>
      {game.clips >= 1e3 && game.marketingFeature.open ? (
        <FeatureComponent
          animate={game.marketingFeature.animate}
          onAnimationEnd={() =>
            setGame({
              type: 'UPDATE_FEATURE',
              feature: 'marketingFeature',
              open: true,
              animate: false,
            })
          }
        >
          <GroupComponent>
            <DialComponent
              value={game.marketingCost}
              style="currency"
              label="Prix marketing"
              disabled={game.marketing >= 10}
            />
            <DialComponent
              value={game.marketing}
              limit={10}
              notation="compact"
              label="Marketing"
            />
          </GroupComponent>
          <ButtonComponent
            className={styles.button}
            disabled={game.marketingCost > game.funds || game.marketing >= 10}
            onClick={() => setGame({ type: 'BUY_MARKETING' })}
          >
            {t('common.button.buy')}
          </ButtonComponent>
        </FeatureComponent>
      ) : null}
    </CardComponent>
  );
};
