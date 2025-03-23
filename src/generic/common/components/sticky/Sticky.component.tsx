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
import { createPortal } from 'react-dom';

export const StickyComponent = ({ children }: { children: ReactNode }) => {
  // console.log("StickyComponent");
  const [active, setActive] = useState(false);
  const [InnerHeight, setInnerHeight] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
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
          setInnerHeight(inner.current!.clientHeight);
          setActive(true);
        }
      } else {
        if (active) setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const onResize = () => setBodyHeight(document.body.offsetHeight);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { active } as Attributes);
    }
    return child;
  });

  return (
    <div
      ref={sticky}
      className={classNames([styles.sticky, active ? styles.active : ''])}
      style={{ '--height': `${InnerHeight}px` } as CSSProperties}
    >
      {!active ? (
        <div
          ref={inner}
          className={styles.inner}
        >
          {childrenWithProps}
        </div>
      ) : (
        createPortal(
          <div
            className={styles.stickyCopy}
            style={{
              height: `${bodyHeight}px`,
            }}
          >
            {childrenWithProps}
          </div>,
          document.body
        )
      )}
    </div>
  );
};
