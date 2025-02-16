import { useCallback, useState } from 'react';
import { useDashboard, useDashboardDispatch } from '@/src/game/components/dashboard/useDashboard';
import { InputFieldProps } from '@/src/game/components/initializer/Initializer.type';
import styles from '@/src/game/components/initializer/Initializer.module.scss';

const InputField = ({ label, name, value, onChange }: InputFieldProps) => (
  <label>
    {label}&nbsp;
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
    <br />
  </label>
);

export const InitializerComponent = () => {
  const setDashboard = useDashboardDispatch();
  const dashboard = useDashboard();

  const [formState, setFormState] = useState({
    clips: dashboard.clips,
    clipsStock: dashboard.clipsStock,
    funds: dashboard.funds,
    wiresStock: dashboard.wiresStock,
    marketing: dashboard.marketing,
    autoClippers: dashboard.autoClippers,
    megaClippers: dashboard.megaClippers,
    trust: dashboard.trust,
  });

  const handleChange = useCallback(
    (e: { target: { name: string; value: string } }) => {
      const { name, value } = e.target;
      const newValue = name === 'marketing' && Number(value) > 10 ? 10 : Number(value);

      setFormState((prev) => ({
        ...prev,
        [name]: newValue,
      }));

      setDashboard({
        type: 'INITIALIZE_STATE',
        state: {
          ...dashboard,
          [name]: newValue,
        },
      });
    },
    [dashboard, setDashboard]
  );

  const reload = () => {
    window.location.reload();
  };

  const clearDashboardItem = () => {
    localStorage.removeItem('_3mma_0_dashboard');
    window.location.reload();
  };

  const clearAllItems = () => {
    localStorage.clear();
    window.location.href = 'http://localhost:5173/paperclips/';
  };

  return (
    <div className={styles.initializater}>
      <div>
        <div>Supprimer localStorage :</div>
        <div>
          <button
            type="button"
            onClick={clearDashboardItem}
          >
            Réinitialiser le Dashboard
          </button>
          <br />
          <button
            type="button"
            onClick={clearAllItems}
          >
            Tout réinitialiser
          </button>
          <br />
          <button
            type="button"
            onClick={reload}
          >
            Reload
          </button>
        </div>
      </div>
      <div>
        <div>Initiales valeurs :</div>
        <div>
          {Object.entries(formState).map(([key, value]) => (
            <InputField
              key={key}
              label={key}
              name={key}
              value={value}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          Bonus de production :
          <br />
          Marketing ({dashboard.marketing}) + Bonus clips ({dashboard.clipsBonus * 100})
          <br />
          {dashboard.marketing / 20} + {dashboard.clipsBonus} = {dashboard.productionBonus}
        </div>
        <div>
          <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0 })}>0%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.1 })}>10%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.2 })}>20%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.3 })}>30%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.4 })}>40%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_CLIPS_BONUS', bonus: 0.5 })}>50%</button>
        </div>
      </div>
      <div>
        <div>Quantité d'achat de fer : {dashboard.wires}</div>
        <div>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 5e2 })}>500</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e3 })}>1K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 2e3 })}>2K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 4e3 })}>4K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 8e3 })}>8K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e4 })}>10K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 2e4 })}>20K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 5e4 })}>50K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e5 })}>100K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 5e5 })}>500K</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_QUANTITY', quantity: 1e6 })}>1M</button>
        </div>
      </div>
      <div>
        <div>Bonus d'achat de fer : {dashboard.wiresBonus}</div>
        <div>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0 })}>0%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.1 })}>10%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.2 })}>20%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.3 })}>30%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.4 })}>40%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.5 })}>50%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.6 })}>60%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.7 })}>70%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.8 })}>80%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 0.9 })}>90%</button>
          <button onClick={() => setDashboard({ type: 'UPDATE_WIRE_BONUS', bonus: 1 })}>100%</button>
        </div>
      </div>
    </div>
  );
};
