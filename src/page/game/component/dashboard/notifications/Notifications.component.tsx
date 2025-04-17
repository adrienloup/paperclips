import { useNotifications } from '@/src/page/game/component/dashboard/notifications/useNotifications.ts';
import { NotificationComponent } from '@/src/page/game/component/dashboard/notification/Notification.component.tsx';
import { EmptyComponent } from '@/src/generic/common/component/empty/Empty.component.tsx';
import { Notification } from '@/src/page/game/component/dashboard/notification/Notification.type.ts';
import styles from '@/src/page/game/component/dashboard/notifications/Notifications.module.scss';

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
