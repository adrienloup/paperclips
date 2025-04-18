import { Link } from 'react-router-dom';
import styles from '@/src/generic/common/component/navigation/Navigation.module.scss';

export const NavigationComponent = () => {
  return (
    <nav
      className={styles.navigation}
      role="navigation"
    >
      <Link to={'/paperclips'}>Game</Link>
      <br />
      <Link to={'/paperclips/explore'}>Explore</Link>
    </nav>
  );
};
