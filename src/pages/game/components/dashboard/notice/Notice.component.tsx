import { useTranslation } from 'react-i18next';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
// import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';
import styles from '@/src/pages/game/components/dashboard/notice/Notice.module.scss';

export const NoticeComponent = ({ notice, ...props }: { notice: Notice }) => {
  const { t } = useTranslation();
  const setNotices = useNoticesDispatch();

  const handleDisable = () => setNotices({ type: 'DISABLE_NOTICE', id: notice.id });
  const handleView = () => setNotices({ type: 'VIEW_NOTICE', id: notice.id });

  return (
    <div
      className={classNames([styles.notice, notice.viewed ? styles.viewed : ''])}
      {...props}
    >
      <ButtonComponent
        className={styles.button}
        onClick={handleDisable}
        aria-label="Supprimer la notification"
      >
        {/*<IconComponent icon="close" />*/}x
      </ButtonComponent>
      <ButtonComponent
        className={styles.link}
        to={`/paperclips/explore/${notice.id}`}
        triggerClick={handleView}
      >
        {t(`game.notice.${notice.id}`)}
      </ButtonComponent>
    </div>
  );
};
