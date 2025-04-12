import { CSSProperties, MouseEvent, useEffect, useRef, useState } from 'react';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { NumberComponent } from '@/src/generic/common/components/number/Number.component.tsx';
import { Clicker, ClickerValue } from '@/src/generic/common/components/clicker/Clicker.type.ts';
import styles from '@/src/generic/common/components/clicker/Clicker.module.scss';

export const ClickerComponent = ({
  children,
  className,
  disabled,
  sign = '+',
  value = 1,
  onClick,
}: Clicker) => {
  const [values, setValues] = useState<ClickerValue[]>([]);
  const [isActive, setIsActive] = useState(false);
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    return () => timeouts.current.forEach((id) => clearTimeout(id));
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsActive(false);
    }
  }, [disabled]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const safeX = clientX === 0 ? rect.left : clientX;
    const safeY = clientY === 0 ? rect.top : clientY;

    setValues((prev) => [
      ...prev,
      {
        id: Date.now(),
        x: safeX - rect.left,
        y: safeY - rect.top,
      },
    ]);

    const timeoutId = window.setTimeout(() => {
      setValues((prev) => prev.slice(1));
    }, 4e2);

    timeouts.current.push(timeoutId);

    onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log(e.currentTarget);
    if (e.key === 'Enter' || e.key === ' ') {
      setIsActive(true);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsActive(false);
    }
  };

  const getStyle = (x: number, y: number) =>
    ({ left: x, top: y, '--random': `${Math.random()}` }) as CSSProperties;

  return (
    <ButtonComponent
      className={classNames([styles.button, isActive ? styles.active : '', className])}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      aria-pressed={isActive}
      disabled={disabled}
    >
      {children}
      {values.map((v) => (
        <span
          key={v.id}
          className={styles.value}
          style={getStyle(v.x, v.y)}
        >
          {sign}
          <NumberComponent
            value={value}
            notation="compact"
          />
        </span>
      ))}
    </ButtonComponent>
  );
};
