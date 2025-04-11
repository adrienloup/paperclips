// import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { IconComponent } from '@/src/generic/common/components/icon/Icon.component.tsx';
import { Alert } from '@/src/generic/common/components/alert/Alert.type.tsx';
import styles from '@/src/generic/common/components/alert/Alert.module.scss';

export const AlertComponent = ({
  text,
  status = 'info',
  timeout = 5e3,
  close = true,
  remove,
}: Alert) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  /*const getStyle = useCallback(
    (timeout: number) => ({ '--timeout': `${timeout}ms` }) as CSSProperties,
    []
  );*/

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout) as unknown as number;

      removeTimer.current = setTimeout(() => {
        remove?.();
      }, timeout + 150) as unknown as number; // On retire le composant après l’animation de sortie (150ms après le timeout)
    }

    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      className={classNames([
        styles.alert,
        styles[status],
        timeout > 0 ? styles.in : '',
        out ? styles.out : '',
      ])}
      role="alert"
      aria-live="assertive"
    >
      {text && <div className={styles.text}>{text}</div>}
      {close && (
        <ButtonComponent
          className={styles.button}
          onClick={remove}
        >
          <IconComponent icon="cancel" />
        </ButtonComponent>
      )}
      {/*timeout > 0 && (
        <div
          className={styles.progress}
          style={getStyle(timeout)}
        ></div>
      )*/}
    </div>
  );
};
