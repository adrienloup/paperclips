import { useTranslation } from 'react-i18next';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { Notice } from '@/src/pages/game/components/dashboard/notice/Notice.type.ts';
import styles from '@/src/pages/game/components/dashboard/notice/Notice.module.scss';

export const NoticeComponent = ({ notice, ...props }: { notice: Notice }) => {
  const { t } = useTranslation();
  const setNotices = useNoticesDispatch();

  const disableClick = () => setNotices({ type: 'DISABLE', id: notice.id });
  const viewClick = () => setNotices({ type: 'VIEW', id: notice.id });

  return (
    <div
      className={classNames([styles.notice, notice.view ? styles.view : ''])}
      {...props}
    >
      <ButtonComponent
        className={styles.link}
        to={`/paperclips/explore/${notice.id}`}
        triggerClick={viewClick}
      >
        {t(`game.notice.${notice.id}`)}
      </ButtonComponent>
      <ButtonComponent
        className={styles.button}
        onClick={disableClick}
        aria-label="Supprimer la notification"
      >
        x
      </ButtonComponent>
    </div>
  );
};
