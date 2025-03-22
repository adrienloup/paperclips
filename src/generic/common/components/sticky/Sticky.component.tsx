import {
  Attributes,
  Children,
  cloneElement,
  CSSProperties,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getPosition } from '@/src/generic/utils/getPosition.ts';
import { classNames } from '@/src/generic/utils/classNames.ts';
import styles from './Sticky.module.scss';

export const StickyComponent = ({ children }: { children: ReactNode }) => {
  // console.log("StickyComponent");
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [height, setHeight] = useState(0);
  const sticky = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!inner.current && !sticky.current) return;

      const scrollTop = document.documentElement.scrollTop;
      const offsetTop = getPosition<HTMLElement>(sticky.current!, document.documentElement);
      // const delta = window.innerWidth <= 769 ? 60 : 0;

      // if (scrollTop >= offsetTop.top + sticky.current!.clientHeight - delta) {
      if (scrollTop >= offsetTop.top + sticky.current!.clientHeight) {
        if (!active) {
          setHeight(inner.current!.clientHeight);
          setActive(true);
        }
      } else {
        if (active) setActive(false);
      }

      if (scrollTop >= document.body.clientHeight - window.innerHeight - 1) {
        // if (scrollTop >= document.body.clientHeight - window.innerHeight) {
        if (!hidden) setHidden(true);
      } else {
        if (hidden) setHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { active } as Attributes);
    }
    return child;
  });

  return (
    <div
      ref={sticky}
      className={classNames([styles.sticky, active ? styles.active : '', hidden ? styles.hidden : ''])}
      style={{ '--height': `${height}px` } as CSSProperties}
    >
      <div
        ref={inner}
        className={styles.inner}
      >
        {childrenWithProps}
      </div>
    </div>
  );
};
