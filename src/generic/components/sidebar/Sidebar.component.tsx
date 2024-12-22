import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../utils/classNames';
import { useLanguage } from '../../i18n/useLanguage';
import { Sidebar } from './Sidebar.type';
import styles from './Sidebar.module.scss';

export const SidebarComponent = ({ className, isOpen, onclick }: Sidebar) => {
  const sidebar = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  useEffect(() => {
    const onResize = () => {
      if (!sidebar.current && !isOpen) return;
      const height = document.body.clientHeight;
      sidebar.current!.style.height = height + 'px';
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  return (
    <div
      ref={sidebar}
      className={classNames([
        styles.sidebar,
        className,
        isOpen ? styles.open : '',
      ])}
      role="complementary"
    >
      <div className={styles.inner}>
        <div className="navigation">
          <Link to="/paperclips/">Game</Link>
          <Link to="/paperclips/explore/autoclippers/">AutoClipers</Link>
          <button onClick={toggleLanguage}>
            {language === 'fr' ? 'en' : 'fr'}
          </button>
        </div>
      </div>
      <div className={styles.shadow} onClick={onclick}></div>
    </div>
  );
};
