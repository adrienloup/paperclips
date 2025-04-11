import { useNotifications } from '@/src/pages/game/components/notifications/useNotifications.ts';
import { NotificationComponent } from '@/src/pages/game/components/notification/Notification.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const notifications = useNotifications();

  const notificationEnables = notifications.filter((notification) => notification.enable).length;

  // const notView = state.filter(
  //   (notification) => notification.enable && !notification.view
  // ).length;

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
        <p className={styles.empty}>Aucune notification</p>
      )}
    </div>
  );
};
