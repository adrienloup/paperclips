import { useTranslation } from 'react-i18next';
import { useNotifications } from '@/src/game/components/notifications/useNotifications';
import { AsideComponent } from '@/src/generic/common/components/aside/Aside.component';
import { NotificationComponent } from '@/src/game/components/notifications/Notification.component';
import styles from '@/src/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const { t } = useTranslation();
  const notifications = useNotifications();

  return (
    <AsideComponent
      openLabel={t('game.notifications.open')}
      closeLabel={t('game.notifications.close')}
      icon="notifications"
    >
      <div className={styles.notifications}>
        {notifications && notifications.length ? (
          notifications.map((notification) => (
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
