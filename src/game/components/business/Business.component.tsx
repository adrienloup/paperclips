import { CardComponent } from '@/src/common/components/card/Card.component';
import { NumberComponent } from '@/src/common/components/number/Number.component';
import { Business } from '@/src/game/components/business/Business.type';
import styles from './Business.module.scss';

export const BusinessComponent = ({ dashboard }: Business) => {
  return (
    <CardComponent className={styles.card}>
      <h2>Business</h2>
      {dashboard.feature.autoAverage.enabled && !dashboard.feature.autoAverage.disabled ? (
        <p>
          Argent par Seconde:{' '}
          <NumberComponent
            locale="en-US"
            number={
              dashboard.clipsPerSecond *
              (dashboard.clipCost + dashboard.publicDemand * 0.001 + dashboard.marketing * 0.01)
            }
            style="currency"
          />
          (+
          <NumberComponent
            locale="en-US"
            number={dashboard.publicDemand * 0.001}
            notation="compact"
          />
          )
          {dashboard.feature.marketing.enabled && !dashboard.feature.marketing.disabled ? (
            <>
              (+
              <NumberComponent
                locale="en-US"
                number={dashboard.marketing * 0.01}
                notation="compact"
              />
              )
            </>
          ) : null}
        </p>
      ) : null}
      <p>
        Fonds: <NumberComponent locale="en-US" number={dashboard.funds} style="currency" />
      </p>
    </CardComponent>
  );
};
