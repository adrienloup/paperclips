import { useNotifications } from '@/src/pages/game/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { NotificationComponent } from '@/src/pages/game/components/notification/Notification.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notifications/Notifications.module.scss';

export const NotificationsComponent = () => {
  const state = useNotifications();

  const notificationEnables = state.notifications.filter(
    (notification) => notification.enable
  ).length;

  // const notView = state.notifications.filter(
  //   (notification) => notification.enable && !notification.view
  // ).length;

  return (
    <div
      className={classNames([styles.notifications, state.open ? styles.open : ''])}
      role="complementary"
    >
      {notificationEnables > 0 ? (
        state.notifications.map((notification: Notification) =>
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
