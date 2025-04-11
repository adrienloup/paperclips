import { useTranslation } from 'react-i18next';
import { useNotificationsDispatch } from '@/src/pages/game/components/notifications/useNotifications.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notification } from '@/src/pages/game/components/notification/Notification.type.ts';
import styles from '@/src/pages/game/components/notification/Notification.module.scss';

export const NotificationComponent = ({
  notification,
  ...props
}: {
  notification: Notification;
}) => {
  const { t } = useTranslation();
  const setNotifications = useNotificationsDispatch();

  const disableClick = () => setNotifications({ type: 'DISABLE', id: notification.id });
  const viewClick = () => setNotifications({ type: 'VIEW', id: notification.id });

  return (
    <div
      className={classNames([styles.notification, notification.view ? styles.view : ''])}
      {...props}
    >
      <ButtonComponent
        className={styles.link}
        to={`/paperclips/explore/${notification.id}`}
        triggerClick={viewClick}
      >
        {t(`game.notification.${notification.id}`)}
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={disableClick}
        aria-label="Supprimer la notification"
      >
        <IconComponent icon="cancel" />
      </ButtonComponent>
    </div>
  );
};
