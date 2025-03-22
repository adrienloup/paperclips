import { useNotificationDispatch } from '@/src/pages/game/components/notification/useNotification.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notification/Notification.module.scss';

export const NotificationComponent = ({ notification }: { notification: Notification }) => {
  const setNotifications = useNotificationDispatch();

  const onClick = () => setNotifications({ type: 'DELETE_NOTIFICATION', id: notification.id });

  const onAnimationEnd = () => {
    setNotifications({ type: 'UPDATE_NOTIFICATION', id: notification.id });
  };

  return (
    <div
      className={classNames([styles.notification, notification.animate ? styles.animate : ''])}
      onAnimationEnd={onAnimationEnd}
    >
      <span className={styles.text}>
        <ButtonComponent
          className={styles.link}
          to={`/paperclips/explore/${notification.path}`}
        >
          {notification.text}
        </ButtonComponent>
      </span>
      <ButtonComponent
        className={styles.button}
        onClick={onClick}
      >
        <IconComponent icon="cancel" />
      </ButtonComponent>
    </div>
  );
};
