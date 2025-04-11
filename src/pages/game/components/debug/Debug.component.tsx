import { ChangeEvent, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { useNotificationsDispatch } from '@/src/pages/game/components/notifications/useNotifications.ts';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';

export const DebugComponent = () => {
  // console.log('DebugComponent');
  const location = useLocation();
  const setAlerts = useAlertsDispatch();
  const setNotifications = useNotificationsDispatch();
  const setGame = useGameDispatch();
  const game = useGame();
  const [alertsText, setAlertsText] = useState('Lorem Ipsum');
  const [notificationsId, setNotificationsId] = useState('game');
  const [paperclips, setPaperclips] = useState('0');
  const [funds, setFunds] = useState('0');
  const [wire, setWire] = useState('0');

  const display = useMemo(() => {
    const isDebug = location.search == '?debug';
    if (isDebug) {
      localStorage.setItem('_debug_3mma_0', 'debug');
    } else {
      localStorage.removeItem('_debug_3mma_0');
    }
    return isDebug;
  }, [location.search]);

  const alertsChange = (e: ChangeEvent<HTMLInputElement>) => setAlertsText(e.target.value);
  const alertsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlerts({ type: 'ADD', alert: { text: alertsText } });
  };

  const notificationsChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNotificationsId(e.target.value);
  const notificationsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotifications({ type: 'ENABLE', id: notificationsId });
  };

  const paperclipsChange = (e: ChangeEvent<HTMLInputElement>) => setPaperclips(e.target.value);
  const paperclipsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        paperclips: parseInt(paperclips),
      },
    });
  };

  const fundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(e.target.value);
  const fundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        funds: parseInt(funds),
      },
    });
  };

  const wireChange = (e: ChangeEvent<HTMLInputElement>) => setWire(e.target.value);
  const wireSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        wire: parseInt(wire),
      },
    });
  };

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <form onSubmit={alertsSubmit}>
        <label>alerts</label>
        <input
          value={alertsText}
          onChange={alertsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={notificationsSubmit}>
        <label>notifications</label>
        <input
          value={notificationsId}
          onChange={notificationsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={paperclipsSubmit}>
        <label>paperclips</label>
        <input
          value={paperclips}
          onChange={paperclipsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={fundsSubmit}>
        <label>funds</label>
        <input
          value={funds}
          onChange={fundsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={wireSubmit}>
        <label>wire</label>
        <input
          value={wire}
          onChange={wireChange}
        />
        <button type="submit">Add</button>
      </form>
      <form>
        <label>wirebonus</label>
        <button
          type="button"
          onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 1e2 })}
        >
          1e2
        </button>
        <button
          type="button"
          onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 5e2 })}
        >
          5e2
        </button>
        <button
          type="button"
          onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 2e3 })}
        >
          2e3
        </button>
        <button
          type="button"
          onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 1e5 })}
        >
          1e5
        </button>
        <button
          type="button"
          onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 1e6 })}
        >
          1e6
        </button>
        <button
          type="button"
          onClick={() => setGame({ type: 'UPDATE_WIRE_BONUS', bonus: 5e6 })}
        >
          5e6
        </button>
      </form>
    </div>
  ) : null;
};
