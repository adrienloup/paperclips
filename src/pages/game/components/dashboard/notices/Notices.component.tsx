import { useNotices } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { NoticeComponent } from '@/src/pages/game/components/dashboard/notices/notice/Notice.component.tsx';
import { EmptyComponent } from '@/src/generic/common/components/empty/Empty.component.tsx';
import { Notice } from '@/src/pages/game/components/dashboard/notices/notice/Notice.type.ts';
import styles from '@/src/pages/game/components/dashboard/notices/Notices.module.scss';

export const NoticesComponent = () => {
  const notices = useNotices();
  const noticeEnables = notices.filter((notice) => notice.enabled).length;

  return (
    <div
      className={styles.notices}
      role="complementary"
    >
      {noticeEnables > 0 ? (
        notices.map((notice: Notice) =>
          notice.enabled ? (
            <NoticeComponent
              key={notice.id}
              notice={notice}
            />
          ) : null
        )
      ) : (
        <EmptyComponent
          className={styles.empty}
          empty="game.empty.notice"
        />
      )}
    </div>
  );
};
