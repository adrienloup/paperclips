import { useState } from 'react';
import { useGame } from '@/src/pages/game/useGame.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { ModalComponent } from '@/src/generic/common/components/modal/Modal.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
// import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const WalletComponent = () => {
  const game = useGame();
  const [trade, setTrade] = useState(false);

  return (
    <DialsComponent>
      <DialComponent
        value={game.coins.length}
        notation="compact"
        label="Actives"
      />
      <ButtonComponent
        className={classNames([styles.button, styles.label])}
        aria-label="Trade"
        onClick={() => setTrade(!trade)}
      >
        Trade
      </ButtonComponent>
      {game.coins.length ? (
        game.coins.map((coin) => (
          <DialComponent
            key={coin.name}
            value={coin.quantity}
            label={coin.name}
            notation="compact"
          />
        ))
      ) : (
        <EmptyComponent empty="No actives at all" />
      )}
      <ModalComponent
        labelledby="modal-trade"
        modal={trade}
        onClick={() => setTrade(false)}
      >
        <TitleComponent
          tag="h2"
          id="modal-trade"
          className={styles.subtitle}
        >
          trade
        </TitleComponent>
        <DialsComponent>
          <DialComponent
            value={10}
            style="currency"
            notation="compact"
            label="tutu"
          />
          {/*<DialComponent*/}
          {/*  value={game.cash}*/}
          {/*  style="currency"*/}
          {/*  notation="compact"*/}
          {/*  label="Cash"*/}
          {/*/>*/}
          {/*<div className={styles.buttons}>*/}
          {/*  <ClickerComponent*/}
          {/*    className={styles.button}*/}
          {/*    aria-label="Decrease cash"*/}
          {/*    value={10}*/}
          {/*    prefix="-"*/}
          {/*    suffix="cash"*/}
          {/*    currency*/}
          {/*    disabled={game.cash <= 0}*/}
          {/*    onClick={() => setGame({ type: 'DECREASE_CASH' })}*/}
          {/*  >*/}
          {/*    -*/}
          {/*  </ClickerComponent>*/}
          {/*  <ClickerComponent*/}
          {/*    className={styles.button}*/}
          {/*    aria-label="Increase cash"*/}
          {/*    value={10}*/}
          {/*    prefix="+"*/}
          {/*    suffix="cash"*/}
          {/*    currency*/}
          {/*    disabled={game.funds < 10}*/}
          {/*    onClick={() => setGame({ type: 'INCREASE_CASH' })}*/}
          {/*  >*/}
          {/*    +*/}
          {/*  </ClickerComponent>*/}
          {/*</div>*/}
        </DialsComponent>
      </ModalComponent>
    </DialsComponent>
  );
};
