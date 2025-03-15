import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { useNotificationDispatch } from '@/src/pages/game/components/notification/useNotification.ts';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';

export const DebugComponent = () => {
  const location = useLocation();
  const setGame = useGameDispatch();
  const game = useGame();
  const setNotifications = useNotificationDispatch();
  const [display, setDisplay] = useState(false);
  const [idNotification, setIdNotification] = useState('');
  const [clips, setClips] = useState('');

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
  };

  const onNotificationChange = (e: ChangeEvent<HTMLInputElement>) =>
    setIdNotification(e.target.value);

  const onNotificationSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotifications({ type: 'ADD_NOTIFICATION', id: parseInt(idNotification) });
  };

  useEffect(() => {
    const debug =
      location.search.split('=')[0] === '?debug' ? location.search.split('=').pop() : '';
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
                value={idNotification}
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
        </div>
      )}
    </>
  );
};
