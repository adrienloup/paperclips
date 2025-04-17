import { classNames } from '@/src/generic/utils/classNames.ts';
import { Frames } from '@/src/generic/common/component/frames/Frames.type.ts';
import styles from '@/src/generic/common/component/frames/Frames.module.scss';

export const FramesComponent = ({ children, direction = 'column', className }: Frames) => {
  return (
    <div
      className={classNames([styles.frames, className])}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  );
};
