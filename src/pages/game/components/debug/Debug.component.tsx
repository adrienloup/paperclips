import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNotificationDispatch } from '@/src/pages/game/components/notification/useNotification.ts';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';
import { useAlertDispatch } from '@/src/generic/common/components/alert/useAlert.ts';

export const DebugComponent = () => {
  const location = useLocation();
  const setGame = useGameDispatch();
  const game = useGame();
  const setNotifications = useNotificationDispatch();
  const setAlerts = useAlertDispatch();
  const [display, setDisplay] = useState(false);
  const [notification, setNotification] = useState('');
  const [clips, setClips] = useState('');
  const [funds, setFunds] = useState('');
  const [trust, setTrust] = useState('');

  const onNotificationChange = (e: ChangeEvent<HTMLInputElement>) => setNotification(e.target.value);
  const onNotificationSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotifications({
      type: 'ADD_NOTIFICATION',
      id: parseInt(notification),
    });
    setNotification('');
  };

  const onClipsChange = (e: ChangeEvent<HTMLInputElement>) => setClips(e.target.value);
  const onClipsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE_STATE',
      state: {
        ...game,
        clips: parseInt(clips),
      },
    });
    setClips('');
  };

  const onFundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(e.target.value);
  const onFundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE_STATE',
      state: {
        ...game,
        funds: parseInt(funds),
      },
    });
    setFunds('');
  };

  const onTrustChange = (e: ChangeEvent<HTMLInputElement>) => setTrust(e.target.value);
  const onTrustSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE_STATE',
      state: {
        ...game,
        trust: Math.min(parseInt(trust), 100),
      },
    });
    setTrust('');
  };

  useEffect(() => {
    const debug = location.search.split('=')[0] === '?debug' ? location.search.split('=').pop() : '';
    if (debug === '1') {
      window.localStorage.setItem('_paperclips_3mma_0_debug', '1');
    } else if (debug === '0') {
      window.localStorage.removeItem('_paperclips_3mma_0_debug');
    }
    setDisplay(!!window.localStorage.getItem('_paperclips_3mma_0_debug'));
  }, []);

  return (
    <>
      {display && (
        <div className={styles.debug}>
          <form onSubmit={onNotificationSubmit}>
            <label>
              Notifications
              <input
                type="text"
                value={notification}
                onChange={onNotificationChange}
              />
              <button type="submit">Add</button>
            </label>
          </form>
          <form onSubmit={onClipsSubmit}>
            <label>
              Clips
              <input
                type="text"
                value={clips}
                onChange={onClipsChange}
              />
              <button type="submit">Add</button>
            </label>
          </form>
          <form onSubmit={onFundsSubmit}>
            <label>
              Funds
              <input
                type="text"
                value={funds}
                onChange={onFundsChange}
              />
              <button type="submit">Add</button>
            </label>
          </form>
          <form>
            Wire{' '}
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_WIRE', value: 1e2 })}
            >
              1e2
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_WIRE', value: 5e2 })}
            >
              5e2
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_WIRE', value: 2e3 })}
            >
              2e3
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_WIRE', value: 1e5 })}
            >
              1e5
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_WIRE', value: 1e6 })}
            >
              1e6
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_WIRE', value: 5e6 })}
            >
              5e6
            </button>
          </form>
          <form>
            ProduceBonus{' '}
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 1 })}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 2 })}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 3 })}
            >
              3
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 4 })}
            >
              4
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 5 })}
            >
              5
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 6 })}
            >
              6
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 7 })}
            >
              7
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 8 })}
            >
              8
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 9 })}
            >
              9
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_PRODUCE_BONUS', bonus: 10 })}
            >
              10
            </button>
          </form>
          <form>
            Drones{' '}
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_DRONES', value: 1e1 })}
            >
              1e1
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_DRONES', value: 5e1 })}
            >
              5e1
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_DRONES', value: 1e2 })}
            >
              1e2
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_DRONES', value: 5e2 })}
            >
              5e2
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_DRONES', value: 1e3 })}
            >
              1e3
            </button>
            <button
              type="button"
              onClick={() => setGame({ type: 'UPDATE_DRONES', value: 2e3 })}
            >
              2e3
            </button>
          </form>
          <form onSubmit={onTrustSubmit}>
            <label>
              Trust
              <input
                type="text"
                value={trust}
                onChange={onTrustChange}
              />
              <button type="submit">Add</button>
            </label>
          </form>
          <form>
            <label>
              Alerts{' '}
              <button
                type="button"
                onClick={() => setAlerts({ type: 'ADD', alert: { id: 1e1, text: 'alert1' } })}
              >
                1e1
              </button>
            </label>
          </form>
        </div>
      )}
    </>
  );
};
