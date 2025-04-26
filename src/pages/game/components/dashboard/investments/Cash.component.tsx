import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { DialsComponent } from '@/src/generic/common/components/dials/Dials.component.tsx';
import { DialComponent } from '@/src/generic/common/components/dial/Dial.component.tsx';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { ModalComponent } from '@/src/generic/common/components/modal/Modal.component.tsx';
import { TitleComponent } from '@/src/generic/common/components/title/Title.component.tsx';
import { ClickerComponent } from '@/src/generic/common/components/clicker/Clicker.component.tsx';
import styles from '@/src/generic/common/components/card/Card.module.scss';

export const CashComponent = () => {
  const { t } = useTranslation();
  const setGame = useGameDispatch();
  const game = useGame();
  const [balance, setBalance] = useState(false);

  return (
    <DialsComponent>
      <DialComponent
        value={game.cash}
        style="currency"
        notation="compact"
        label="Cash"
      />
      <div className={styles.buttons}>
        <ButtonComponent
          className={classNames([styles.button, styles.label])}
          onClick={() => setBalance(!balance)}
        >
          Balance
        </ButtonComponent>
      </div>
      <ModalComponent
        labelledby="modal-balance"
        modal={balance}
        onClick={() => setBalance(false)}
      >
        <TitleComponent
          tag="h2"
          id="modal-balance"
          className={styles.subtitle}
        >
          Balance
        </TitleComponent>
        <DialsComponent>
          <DialComponent
            value={game.funds}
            style="currency"
            notation="compact"
            label={t('game.fundsAvailable')}
          />
          <DialComponent
            value={game.cash}
            style="currency"
            notation="compact"
            label="Cash"
          />
          <div className={styles.buttons}>
            <ClickerComponent
              className={styles.button}
              aria-label="Decrease cash"
              value={10}
              prefix="-"
              suffix="cash"
              currency
              disabled={game.cash <= 0}
              onClick={() => setGame({ type: 'DECREASE_CASH' })}
            >
              -
            </ClickerComponent>
            <ClickerComponent
              className={styles.button}
              aria-label="Increase cash"
              value={10}
              prefix="+"
              suffix="cash"
              currency
              disabled={game.funds < 10}
              onClick={() => setGame({ type: 'INCREASE_CASH' })}
            >
              +
            </ClickerComponent>
          </div>
        </DialsComponent>
      </ModalComponent>
    </DialsComponent>
  );
};
