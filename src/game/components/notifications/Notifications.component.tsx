import { useTranslation } from 'react-i18next';
import { AsideComponent } from '@/src/generic/common/components/aside/Aside.component';
import styles from '@/src/game/components/notifications/Notifications.module.scss';
import { NotificationComponent } from '@/src/game/components/notifications/Notification.component.tsx';

export const NotificationsComponent = () => {
  const { t } = useTranslation();

  return (
    <AsideComponent
      openLabel={t('game.notifications.open')}
      closeLabel={t('game.notifications.close')}
      icon="notifications"
    >
      <div className={styles.notifications}>
        <NotificationComponent />
      </div>
    </AsideComponent>
  );
};
