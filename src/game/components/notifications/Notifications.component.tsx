import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame } from '@/src/game/repository/useGame';
import {
  useNotification,
  useNotificationDispatch,
} from '@/src/game/components/notifications/useNotification';
import { AsideComponent } from '@/src/generic/common/components/aside/Aside.component';
import { NotificationComponent } from '@/src/game/components/notifications/Notification.component';
import styles from '@/src/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const { t } = useTranslation();
  const notif = useNotification();
  const setNotif = useNotificationDispatch();
  const game = useGame();

  useEffect(() => {
    const notifications = [
      { threshold: 1e3, id: 2 },
      { threshold: 2e3, id: 3 },
      { threshold: 2e3, id: 4 },
    ];

    notifications.forEach(({ threshold, id }) => {
      if (game.clips >= threshold && !notif.notifications[id].show) {
        setNotif({
          type: 'ADD',
          id,
        });
      }
    });
  }, [game.clips, notif.notifications]);

  const handleAsideClick = (open: boolean) => {
    const { notify } = notif;
    if (notify && open) {
      setNotif({ type: 'NOTIFY', notify: false });
    }
  };

  return (
    <AsideComponent
      openLabel={t('game.notifications.open')}
      closeLabel={t('game.notifications.close')}
      icon={notif.notify ? 'notifications_active' : 'notifications'}
      onClick={handleAsideClick}
    >
      {notif?.notifications?.length ? (
        <div className={styles.notifications}>
          {notif.notifications.map((notification) => (
            <NotificationComponent
              key={notification.id}
              notification={notification}
              onClick={() => setNotif({ type: 'DELETE', id: notification.id })}
            />
          ))}
        </div>
      ) : (
        <p>Aucune notification</p>
      )}
    </AsideComponent>
  );
};
