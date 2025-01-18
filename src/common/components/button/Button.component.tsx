import { Link } from 'react-router-dom';
import { classNames } from '@/src/generic/utils/classNames';
import { Button } from '@/src/generic/components/button/Button.type';
import styles from './Button.module.scss';

export const ButtonComponent = ({
  children,
  href,
  to,
  className,
  innerRef,
  onClick,
  ...props
}: Button<HTMLButtonElement & HTMLAnchorElement>) => {
  const link = (
    <Link to={to!} className={classNames([styles.button, className])} {...props}>
      {children}
    </Link>
  );

  const a = (
    <a href={href} target="_blank" rel="noopener" className={classNames([styles.button, className])} {...props}>
      {children}
    </a>
  );

  const button = (
    <button
      type="button"
      ref={innerRef}
      onClick={onClick}
      className={classNames([styles.button, className])}
      {...props}
    >
      {children}
    </button>
  );

  return href ? a : to ? link : button;
};
