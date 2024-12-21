import { classNames } from '../../utils/classNames';
import { Loader } from './Loader.type';
import styles from './Loader.module.scss';

export const LoaderComponent = ({
  className,
  duration = 1e3,
  size = 'medium',
}: Loader) => {
  return (
    <div
      className={classNames([styles.loader, styles[size], className])}
      style={
        {
          '--loader-duration': `${duration}ms`,
        } as React.CSSProperties
      }
    ></div>
  );
};
