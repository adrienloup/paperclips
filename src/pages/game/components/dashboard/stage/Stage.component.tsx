import styles from '@/src/pages/game/components/dashboard/stage/Stage.module.scss';

export const StageComponent = () => {
  console.log('StageComponent');
  return (
    <div className={styles.stage}>
      <span className={styles.label}>Stage 2</span>
      <div className={styles.progress}></div>
    </div>
  );
};
