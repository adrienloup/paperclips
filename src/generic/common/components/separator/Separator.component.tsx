import { Icon } from "../Icon/Icon";
import styles from "./Separator.module.scss";

export const Separator = ({ name }: { name: string }) => {
  return (
    <div className={styles.separator}>
      <Icon name={name} cssClass={styles.icon} />
    </div>
  );
};
