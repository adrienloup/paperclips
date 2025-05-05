import { classNames } from '@/src/generic/utils/classNames.ts';
import { Frame } from '@/src/generic/common/components/frames/frame/Frame.type.ts';
import styles from '@/src/generic/common/components/frames/frame/Frame.module.scss';

export const FrameComponent = ({ children, direction = 'row', className }: Frame) => {
  return (
    <div
      className={classNames([styles.frame, className])}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  );
};
