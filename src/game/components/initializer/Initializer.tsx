import { useState } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import styles from '@/src/game/components/initializer/Initializer.module.scss';

export const InitializerComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();
  const [clips, setClips] = useState(dashboard.clips);
  const [clipsStock, setClipsStock] = useState(dashboard.clipsStock);
  const [funds, setFunds] = useState(dashboard.funds);
  const [wiresStock, setWiresStock] = useState(dashboard.wiresStock);
  const [marketing, setMarketing] = useState(dashboard.marketing);
  const [autoClippers, setAutoClippers] = useState(dashboard.autoClippers);
  const [megaClippers, setMegaClippers] = useState(dashboard.megaClippers);

  const clearDashboardItem = () => {
    localStorage.removeItem('_3mma_0_dashboard');
    window.location.reload();
  };

  const clearAllItems = () => {
    //localStorage.clear();
    localStorage.removeItem('_3mma_0_dashboard');
    localStorage.removeItem('_3mma_0_theme');
    localStorage.removeItem('_3mma_0_language');
    localStorage.removeItem('_3mma_0_header');
    localStorage.removeItem('_3mma_0_debug');
    window.location.reload();
  };

  function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setDashboard({
      type: 'INITIALIZE_STATE',
      state: {
        ...dashboard,
        clips,
        clipsStock,
        funds,
        wiresStock,
        marketing,
        autoClippers,
        megaClippers,
      },
    });
  }

  return (
    <form
      className={styles.initializater}
      method="post"
      onSubmit={onSubmit}
    >
      <div>
        <div>Supprimer localStorage :</div>
        <div>
          <button onClick={clearDashboardItem}>Dashboard</button>
          <button onClick={clearAllItems}>Tous</button>
        </div>
      </div>
      <div>
        <div>Initiales valeurs :</div>
        <div>
          <label>
            clips&nbsp;
            <input
              type="number"
              name="clips"
              value={clips}
              onChange={(e) => setClips(Number(e.target.value))}
            />
          </label>
          <br />
          <label>
            clipsStock&nbsp;
            <input
              type="number"
              name="clipsStock"
              value={clipsStock}
              onChange={(e) => setClipsStock(Number(e.target.value))}
            />
          </label>
          <br />
          <label>
            funds&nbsp;
            <input
              type="number"
              name="funds"
              value={funds}
              onChange={(e) => setFunds(Number(e.target.value))}
            />
          </label>
          <br />
          <label>
            wiresStock&nbsp;
            <input
              type="number"
              name="wiresStock"
              value={wiresStock}
              onChange={(e) => setWiresStock(Number(e.target.value))}
            />
          </label>
          <br />
          <label>
            marketing&nbsp;
            <input
              type="number"
              name="marketing"
              value={marketing}
              onChange={(e) => {
                const value = Number(e.target.value);
                setMarketing(value > 10 ? 10 : value);
              }}
            />
          </label>
          <br />
          <label>
            autoClippers&nbsp;
            <input
              type="number"
              name="autoClippers"
              value={autoClippers}
              onChange={(e) => setAutoClippers(Number(e.target.value))}
            />
          </label>
          <br />
          <label>
            megaClippers&nbsp;
            <input
              type="number"
              name="megaClippers"
              value={megaClippers}
              onChange={(e) => setMegaClippers(Number(e.target.value))}
            />
          </label>
          <br />
          <button type="submit">Initialize</button>
        </div>
      </div>
      <div>
        <div>
          Bonus de production :
          <br />
          marketing {dashboard.marketing} + bonus %
          <br />= {dashboard.productionBonus}
        </div>
        <div>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.15 })}
            disabled={dashboard.marketing < 10}
          >
            +15%
          </button>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.25 })}
            disabled={dashboard.marketing < 10}
          >
            +25%
          </button>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.35 })}
            disabled={dashboard.marketing < 10}
          >
            +35%
          </button>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.45 })}
            disabled={dashboard.marketing < 10}
          >
            +45%
          </button>
          <button
            onClick={() => setDashboard({ type: 'UPDATE_PRODUCTION_BONUS', bonus: 0.55 })}
            disabled={dashboard.marketing < 10}
          >
            +55%
          </button>
        </div>
      </div>
      <div>
        <div>Quantité d'achat de fer : {dashboard.wires}</div>
        <div>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 1e3 })}>1000</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 2e3 })}>2000</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 4e3 })}>4000</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 5e3 })}>5000</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE', wire: 1e4 })}>10000</button>
        </div>
      </div>
      <div>
        <div>Bonus d'achat de fer : {dashboard.wiresBonus}</div>
        <div>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0 })}>0%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.1 })}>
            10%
          </button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.25 })}>
            25%
          </button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.5 })}>
            50%
          </button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.75 })}>
            75%
          </button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 1 })}>
            100%
          </button>
        </div>
      </div>
    </form>
  );
};
