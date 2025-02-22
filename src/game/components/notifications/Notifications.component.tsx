import { useTranslation } from 'react-i18next';
import {
  useNotifications,
  useNotificationsDispatch,
} from '@/src/game/components/notifications/useNotifications';
import { AsideComponent } from '@/src/generic/common/components/aside/Aside.component';
import { NotificationComponent } from '@/src/game/components/notifications/Notification.component';
import styles from '@/src/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const { t } = useTranslation();
  const notification = useNotifications();
  const setNotification = useNotificationsDispatch();

  const handleAsideClick = (open: boolean) => {
    const { notify } = notification;
    if (notify && open) {
      setNotification({ type: 'NOTIFY', notify: false });
    }
  };

  return (
    <AsideComponent
      openLabel={t('game.notifications.open')}
      closeLabel={t('game.notifications.close')}
      icon={notification.notify ? 'notifications_active' : 'notifications'}
      onClick={handleAsideClick}
    >
      <div className={styles.notifications}>
        {notification && notification.notifications.length ? (
          notification.notifications.map((notification) => (
            <NotificationComponent
              key={notification.id}
              notification={notification}
            />
          ))
        ) : (
          <p>Aucune notification</p>
        )}
      </div>
    </AsideComponent>
  );
};
