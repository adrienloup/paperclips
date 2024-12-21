import { Children } from '../../types/Children.type';
import { useLanguage } from '../../i18n/useLanguage';
import styles from './Header.module.scss';

export const HeaderComponent = ({ children }: { children: Children }) => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  return (
    <header className={styles.header} role="banner">
      {children}
      <button onClick={changeLanguage}>
        {language === 'fr' ? 'en' : 'fr'}
      </button>
    </header>
  );
};
