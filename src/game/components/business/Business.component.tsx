import { classNames } from '@/src/generic/utils/classNames';
import { Business } from '@/src/game/components/business/Business.type';
import { CardComponent } from '@/src/common/components/cards/Card.component';
import { DialComponent } from '@/src/common/components/dial/Dial.component';
import { TitleComponent } from '@/src/common/components/title/Title.component';
import { ButtonComponent } from '@/src/common/components/button/Button.component';
import { BonusComponent } from '@/src/common/components/bonus/Bonus.component';
import cardStyles from '@/src/common/components/cards/Card.module.scss';
import businessStyles from '@/src/game/components/business/Business.module.scss';

export const BusinessComponent = ({
  dashboard,
  decreaseClipCost,
  increaseClipCost,
  updateMarketing,
}: Business) => {
  return (
    <CardComponent>
      <TitleComponent title="Business" />
      {dashboard.feature.autoAverage.enabled ? (
        <DialComponent
          number={
            dashboard.clipsPerSecond *
            (dashboard.clipCost + dashboard.publicDemand * 0.001 + dashboard.marketing * 0.01)
          }
          style="currency"
          label="par Seconde"
        />
      ) : null}
      <div className={cardStyles.group}>
        <DialComponent number={dashboard.funds} style="currency" label="Fonds" />
        {dashboard.marketing > 1 ? (
          <BonusComponent number={dashboard.publicDemand * 0.001 + dashboard.marketing * 0.01} />
        ) : null}
      </div>
      <div className={cardStyles.group}>
        <DialComponent number={dashboard.clipStock} notation="compact" label="Stock de Clips" />
        {dashboard.productionBonus > 0.1 ? (
          <BonusComponent number={dashboard.productionBonus} style="percent" />
        ) : null}
      </div>
      <div className={cardStyles.group}>
        <DialComponent number={dashboard.clipCost} style="currency" label="Clip cost" />
        <DialComponent
          number={dashboard.publicDemand * 0.01}
          style="percent"
          label="publicDemand"
        />
      </div>
      <div className={cardStyles.group}>
        <ButtonComponent className={cardStyles.button} onClick={decreaseClipCost}>
          💸 Diminuer
        </ButtonComponent>
        <ButtonComponent className={cardStyles.button} onClick={increaseClipCost}>
          💰 Augmenter
        </ButtonComponent>
      </div>
      {dashboard.feature.marketing.enabled ? (
        <div className={classNames([cardStyles.group, businessStyles.marketing])}>
          <ButtonComponent
            className={cardStyles.button}
            onClick={updateMarketing}
            disabled={dashboard.funds < dashboard.marketingCost || dashboard.marketing == 10}
          >
            marketing
          </ButtonComponent>
          level {dashboard.marketing}
          {dashboard.marketing < 10 ? <p>{dashboard.marketingCost} $</p> : null}
        </div>
      ) : null}
    </CardComponent>
  );
};
