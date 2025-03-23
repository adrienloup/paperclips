import { Alert } from '@/src/generic/common/components/alert/Alert.type.tsx';
import styles from '@/src/generic/common/components/alert/Alert.module.scss';

export const AlertComponent = ({ title, text }: Alert) => {
  return (
    <div className={styles.alert}>
      {title} {text}
    </div>
  );
};
