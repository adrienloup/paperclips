import styles from '@/src/pages/game/components/notifications/Notification.module.scss';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';

export const NotificationComponent = ({
  notification,
  onClick,
}: {
  notification: { id: number; text: string; show: boolean };
  onClick: () => void;
}) => {
  return (
    <>
      {notification.show && (
        <ButtonComponent
          className={styles.notification}
          onClick={onClick}
        >
          {notification.text}
        </ButtonComponent>
      )}
    </>
  );
};
