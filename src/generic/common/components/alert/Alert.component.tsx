import { CSSProperties, useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Alert } from '@/src/generic/common/components/alert/Alert.type.tsx';
import styles from '@/src/generic/common/components/alert/Alert.module.scss';
import { classNames } from '@/src/generic/utils/classNames.ts';

export const AlertComponent = ({
  title,
  text,
  status = 'info',
  timeout = 3e3,
  close = true,
  remove,
}: Alert) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  const getStyle = (timeout: number) => ({ '--timeout': `${timeout}ms` }) as CSSProperties;

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout) as unknown as number;

      removeTimer.current = setTimeout(() => {
        remove!();
      }, timeout + 150) as unknown as number;
    }

    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      role="alert"
      className={classNames([
        styles.alert,
        styles[status],
        timeout > 0 ? styles.in : '',
        out ? styles.out : '',
      ])}
    >
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        <p className={styles.text}>{text}</p>
      </div>
      {close && (
        <ButtonComponent
          className={styles.button}
          onClick={remove}
        >
          <IconComponent icon="close" />
        </ButtonComponent>
      )}
      {timeout > 0 ? (
        <div
          className={styles.progress}
          style={getStyle(timeout)}
        ></div>
      ) : null}
    </div>
  );
};
