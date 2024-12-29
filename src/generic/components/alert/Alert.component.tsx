import { classNames } from '../../utils/classNames';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Alert } from './Alert.type';
// import { ButtonComponent } from '../button/Button.component';
import styles from './Alert.module.scss';

export const AlertComponent = ({
  id,
  label,
  duration = 5e3,
  onClick = () => {},
}: Alert) => {
  const timer1 = useRef<ReturnType<typeof setInterval> | null>(null);
  const timer2 = useRef<ReturnType<typeof setInterval> | null>(null);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      timer1.current = setTimeout(() => {
        setOut(true);
      }, duration);

      timer2.current = setTimeout(() => {
        onClick();
      }, duration + 150);
    }
    return () => {
      clearTimeout(timer1.current!);
      clearTimeout(timer2.current!);
    };
  }, []);

  return (
    <div
      id={id}
      role="alert"
      className={classNames([
        styles.alert,
        duration > 0 ? styles.in : '',
        out ? styles.out : '',
      ])}
      style={
        {
          '--duration': `${duration}ms`,
        } as CSSProperties
      }
    >
      {label}
    </div>
  );
};
