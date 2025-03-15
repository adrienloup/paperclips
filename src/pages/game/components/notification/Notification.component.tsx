import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notification/Notification.module.scss';

export const NotificationComponent = ({
  notification,
  onClick,
}: {
  notification: Notification;
  onClick: () => void;
}) => {
  return (
    <div className={styles.notification}>
      {notification.text}
      <ButtonComponent
        className={styles.button}
        onClick={onClick}
      >
        x
      </ButtonComponent>
    </div>
  );
};
