import { Metric } from './Metric.type';
import styles from './Metric.module.scss';

export const MetricComponent = ({ value, label }: Metric) => {
  return (
    <div className={styles.metric}>
      {value}
      {label ? <span>{label}</span> : null}
    </div>
  );
};
