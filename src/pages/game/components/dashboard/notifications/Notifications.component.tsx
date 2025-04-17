import { useNotifications } from '@/src/pages/game/components/dashboard/notifications/useNotifications.ts';
import { NotificationComponent } from '@/src/pages/game/components/dashboard/notification/Notification.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import { Notification } from '@/src/pages/game/components/dashboard/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/dashboard/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const notifications = useNotifications();
  const notificationEnables = notifications.filter((notification) => notification.enable).length;

  return (
    <div
      className={styles.notifications}
      role="complementary"
    >
      {notificationEnables > 0 ? (
        notifications.map((notification: Notification) =>
          notification.enable ? (
            <NotificationComponent
              key={notification.id}
              notification={notification}
            />
          ) : null
        )
      ) : (
        <EmptyComponent
          className={styles.empty}
          empty="game.empty.notification"
        />
      )}
    </div>
  );
};
