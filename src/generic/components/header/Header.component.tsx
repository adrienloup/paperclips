import { useState } from 'react';
import { useGameDispatch } from '../../../game/useGame';
import { classNames } from '../../utils/classNames';
import { ButtonComponent } from '../button/Button.component';
import { IconComponent } from '../icon/Icon.component';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  const setGame = useGameDispatch();
  const [opened, setOpen] = useState(false);

  const restart = () => {
    setGame({
      paperclips: 2000, // 0
      paperclipCost: 0.25,
      unsoldInventory: 0,
      fundsAvailable: 2000, // 0
      feature: {
        autoClippers: false,
        marketing: false,
        trust: false,
      },
      publicDemand: 75,
      steelWire: 1000,
      steelWireCost: 6.25,
      steelWireRefill: 50,
      autoClippers: 0,
      autoClippersCost: 5.05,
      marketing: 1,
      marketingCost: 100,
    });
  };

  return (
    <header
      className={classNames([styles.header, opened ? styles.opened : ''])}
      role="banner"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>
          <button onClick={restart}>restart</button>
        </div>
      </div>
      <ButtonComponent
        className={styles.button}
        onClick={() => setOpen(!opened)}
      >
        <IconComponent icon="tune" />
      </ButtonComponent>
    </header>
  );
};
