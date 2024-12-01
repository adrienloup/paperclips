import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>
        Un trombone. Deux trombones. Trois trombones…
      </h1>
      <div>
        <Link to="/paperclips">Home</Link>
        <br />
        <Link to="/paperclips/help">Help</Link>
      </div>
    </div>
  );
}

export default HomePage;
