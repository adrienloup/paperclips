import { useCallback, useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { StageContext } from '@/src/generic/stage/Stage.context.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
import { Stage } from '@/src/generic/stage/Stage.type.ts';

export function StageProvider({ children }: { children: Children }) {
  const [stage, setStage] = useLocalStorage<Stage>('_stage_3mma_0', 'dusk');

  const updateStage = useCallback(
    (newStage: Stage) => {
      document.body.classList.remove(`_${stage}_3mma_0`);
      document.body.classList.add(`_${newStage}_3mma_0`);
      setStage(newStage);
    },
    [setStage]
  );

  const changeStage = useCallback(
    (newStage: Stage) => {
      updateStage(newStage);
    },
    [updateStage]
  );

  useEffect(() => {
    updateStage(stage);
  }, [stage]);

  return <StageContext.Provider value={[stage, changeStage]}>{children}</StageContext.Provider>;
}
