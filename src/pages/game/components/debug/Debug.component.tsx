import { ChangeEvent, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAlertsDispatch } from '@/src/generic/common/components/alerts/useAlerts.ts';
import { useNoticesDispatch } from '@/src/pages/game/components/dashboard/notices/useNotices.ts';
import { useStage } from '@/src/generic/stage/useStage.ts';
import { useGame, useGameDispatch } from '@/src/pages/game/useGame.ts';
import { Stage } from '@/src/generic/stage/Stage.type.ts';
import styles from '@/src/pages/game/components/debug/Debug.module.scss';

export const DebugComponent = () => {
  const location = useLocation();
  const setAlerts = useAlertsDispatch();
  const setNotices = useNoticesDispatch();
  const setGame = useGameDispatch();
  const game = useGame();
  const [stage, setStage] = useStage();
  const [stageValue, setStageValue] = useState<Stage>(stage);
  const [alertsText, setAlertsText] = useState('Lorem Ipsum');
  const [noticesId, setNoticesId] = useState('game');
  const [paperclip, setPaperclip] = useState('0');
  const [funds, setFunds] = useState('0');
  const [wire, setWire] = useState('0');
  const [trust, setTrust] = useState('0');
  const [operation, setOperation] = useState('0');
  const [creativity, setCreativity] = useState('0');
  const display = useMemo(() => {
    const isDebug = location.search == '?debug';
    if (isDebug) {
      localStorage.setItem('_debug_3mma_0', 'debug');
    } else {
      localStorage.removeItem('_debug_3mma_0');
    }
    return isDebug;
  }, [location.search]);

  const stageChange = (e: ChangeEvent<HTMLInputElement>) => setStageValue(e.target.value as Stage);
  const stageSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStage(stageValue);
  };

  const alertsChange = (e: ChangeEvent<HTMLInputElement>) => setAlertsText(e.target.value);
  const alertsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const alertsId = alertsText.replace(/\s/g, '');
    setAlerts({ type: 'ADD', alert: { id: alertsId, text: alertsText } });
  };

  const noticesChange = (e: ChangeEvent<HTMLInputElement>) => setNoticesId(e.target.value);
  const noticesSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotices({ type: 'ENABLED', id: noticesId });
  };

  const paperclipChange = (e: ChangeEvent<HTMLInputElement>) => setPaperclip(e.target.value);
  const paperclipSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        paperclip: parseInt(paperclip),
      },
    });
  };

  const fundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(e.target.value);
  const fundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        funds: parseInt(funds),
      },
    });
  };

  const wireChange = (e: ChangeEvent<HTMLInputElement>) => setWire(e.target.value);
  const wireSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        wire: parseInt(wire),
      },
    });
  };

  const marketingClick = () => setGame({ type: 'BUY_MARKETING' });

  const trustChange = (e: ChangeEvent<HTMLInputElement>) => setTrust(e.target.value);
  const trustSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'UPDATE_TRUST',
      value: parseInt(trust),
    });
  };

  const memoryClick = () => setGame({ type: 'INCREASE_MEMORY' });

  const processorClick = () => setGame({ type: 'INCREASE_PROCESSOR' });

  const operationChange = (e: ChangeEvent<HTMLInputElement>) => setOperation(e.target.value);
  const operationSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        operation: parseInt(operation),
      },
    });
  };

  const creativityChange = (e: ChangeEvent<HTMLInputElement>) => setCreativity(e.target.value);
  const creativitySubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGame({
      type: 'INITIALIZE',
      state: {
        ...game,
        creativity: parseInt(creativity),
      },
    });
  };

  const updateWire = (bonus: number) => setGame({ type: 'UPDATE_WIRE_BONUS', bonus });

  const updateUnsold = (bonus: number) => setGame({ type: 'UPDATE_UNSOLD_BONUS', bonus });

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <form onSubmit={stageSubmit}>
        <label>stage</label>
        <input
          value={stageValue}
          onChange={stageChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={alertsSubmit}>
        <label>alerts</label>
        <input
          value={alertsText}
          onChange={alertsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={noticesSubmit}>
        <label>notices</label>
        <input
          value={noticesId}
          onChange={noticesChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={paperclipSubmit}>
        <label>paperclips</label>
        <input
          value={paperclip}
          onChange={paperclipChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={fundsSubmit}>
        <label>funds</label>
        <input
          value={funds}
          onChange={fundsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={wireSubmit}>
        <label>wire</label>
        <input
          value={wire}
          onChange={wireChange}
        />
        <button type="submit">Add</button>
      </form>
      <form>
        <label>marketing</label>
        <button
          type="button"
          onClick={marketingClick}
        >
          +1
        </button>
      </form>
      <form onSubmit={trustSubmit}>
        <label>trust</label>
        <input
          value={trust}
          onChange={trustChange}
        />
        <button type="submit">Add</button>
      </form>
      <form>
        <label>memory</label>
        <button
          type="button"
          onClick={memoryClick}
        >
          +1
        </button>
      </form>
      <form>
        <label>processor</label>
        <button
          type="button"
          onClick={processorClick}
        >
          +1
        </button>
      </form>
      <form onSubmit={operationSubmit}>
        <label>operations</label>
        <input
          value={operation}
          onChange={operationChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={creativitySubmit}>
        <label>creativity</label>
        <input
          value={creativity}
          onChange={creativityChange}
        />
        <button type="submit">Add</button>
      </form>
      <form>
        <label>wirebonus</label>
        <button
          type="button"
          onClick={() => updateWire(1e2)}
        >
          1e2
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e3)}
        >
          1e3
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e4)}
        >
          1e4
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e6)}
        >
          1e6
        </button>
      </form>
      <form>
        <label>unsoldbonus</label>
        <button
          type="button"
          onClick={() => updateUnsold(1)}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(3)}
        >
          3
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(4)}
        >
          4
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(6)}
        >
          6
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(7)}
        >
          7
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(8)}
        >
          8
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(9)}
        >
          9
        </button>
        <button
          type="button"
          onClick={() => updateUnsold(10)}
        >
          10
        </button>
      </form>
    </div>
  ) : null;
};
