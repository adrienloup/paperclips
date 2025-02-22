import styles from '@/src/game/components/notifications/Notification.module.scss';

export const NotificationComponent = ({
  notification,
}: {
  notification: { id: number; text?: string; show?: boolean };
}) => {
  return (
    <>
      {notification.show && (
        <div className={styles.notification}>
          {notification.id}
          {notification.text}
        </div>
      )}
    </>
  );
};
