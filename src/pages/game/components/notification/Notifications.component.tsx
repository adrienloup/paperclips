import React from 'react';
import { useNotification } from '@/src/pages/game/components/notification/useNotification.ts';
import { NotificationComponent } from '@/src/pages/game/components/notification/Notification.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notification/Notifications.module.scss';

export const NotificationsComponent = () => {
  const notifications = useNotification();

  return (
    <>
      {notifications.length && (
        <div className={styles.notifications}>
          {notifications.map((notification: Notification) => (
            <React.Fragment key={notification.id}>
              {notification.enable && (
                <NotificationComponent notification={notification} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};
