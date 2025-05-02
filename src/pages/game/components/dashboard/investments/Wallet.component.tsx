import { Fragment, useState } from 'react';
import { useGame } from '@/src/pages/game/useGame.ts';
import { useCoin } from '@/src/pages/game/components/dashboard/investments/coin/useCoin.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { ModalComponent } from '@/src/generic/common/components/modal/Modal.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WalletComponent = () => {
  const game = useGame();
  const [coins] = useCoin();
  const [purchases, setPurchases] = useState(false);

  const getCoinPrice = (name: string) => coins.find((coin) => coin.name === name)?.price;
  const getCoinVolume = (name: string) => coins.find((coin) => coin.name === name)?.volume;

  return (
    <DialsComponent>
      <DialComponent
        value={game.wallet.length}
        notation="compact"
        label="active"
      />
      <ButtonComponent
        className={classNames([styles.button, styles.label])}
        onClick={() => setPurchases(!purchases)}
      >
        Purchases
      </ButtonComponent>
      {game.wallet.map((coin) => (
        <Fragment key={coin.name}>
          {coin.quantity > 0 ? (
            <DialComponent
              value={coin.quantity}
              label={coin.name}
              notation="compact"
            />
          ) : null}
        </Fragment>
      ))}
      <ModalComponent
        labelledby="modal-purchases"
        modal={purchases}
        onClick={() => setPurchases(false)}
      >
        <TitleComponent
          tag="h2"
          id="modal-purchases"
          className={styles.subtitle}
        >
          purchases
        </TitleComponent>
        {game.wallet.map((coin) => (
          <Fragment key={coin.name}>
            <DialComponent
              value={coin.quantity}
              label={`${coin.name} active`}
              notation="compact"
            />
            <div className={styles.buttons}>
              <ClickerComponent
                className={styles.button}
                aria-label="Decrease"
                value={0.1}
                prefix="-"
                suffix={coin.name}
                currency
                disabled={coin.quantity <= 0}
                onClick={() => console.log('ok')}
              >
                -
              </ClickerComponent>
              <ClickerComponent
                className={styles.button}
                aria-label="Increase"
                value={0.1}
                prefix="+"
                suffix={coin.name}
                currency
                disabled={game.cash <= getCoinPrice(coin.name)! || getCoinVolume(coin.name)! <= 0}
                onClick={() => console.log('ok')}
              >
                +
              </ClickerComponent>
            </div>
          </Fragment>
        ))}
      </ModalComponent>
    </DialsComponent>
  );
};
