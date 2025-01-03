import { useState } from 'react';
import { useGameDispatch } from '../../../game/useGame';
import { useAlertDispatch } from '../alert/useAlert';
import { classNames } from '../../utils/classNames';
import { ButtonComponent } from '../button/Button.component';
import { IconComponent } from '../icon/Icon.component';
import styles from './Header.module.scss';

export const HeaderComponent = () => {
  const setGame = useGameDispatch();
  const setAlerts = useAlertDispatch();
  const [opened, setOpen] = useState(false);

  const restart = () => {
    setGame({
      paperclips: 4000, // 0
      paperclipCost: 0.25,
      unsoldInventory: 0,
      fundsAvailable: 4000, // 0
      feature: {
        autoClippers: false,
        marketing: false,
        trust: false,
      },
      trust: 1,
      operations: 0,
      creativity: 0,
      processors: 1,
      memory: 1,
      publicDemand: 75,
      steelWire: 2000,
      steelWireCost: 6.25,
      steelWireRefill: 50,
      autoClippers: 0,
      autoClippersCost: 5.25,
      marketing: 1,
      marketingCost: 100,
    });
  };

  const alertTest = () =>
    setAlerts({
      id: 'tata',
      type: 'added',
      label: 'marketing',
    });

  return (
    <header
      className={classNames([styles.header, opened ? styles.opened : ''])}
      role="banner"
    >
      <div className={styles.inside}>
        <div className={styles.inner}>
          <button onClick={restart}>restart</button>
          <button onClick={alertTest}>alertTest</button>
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
