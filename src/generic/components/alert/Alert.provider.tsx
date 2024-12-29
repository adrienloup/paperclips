import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import { Children } from '../../types/Children.type';
import { Alert } from './Alert.type';
import { AlertContext, AlertDispatchContext } from './Alert.context';
import { AlertReducer } from './Alert.reduceur';
import { AlertsComponent } from './Alerts.component';
import { AlertComponent } from './Alert.component';

export function AlertProvider({ children }: { children: Children }) {
  const [alerts, setAlerts] = useReducer(AlertReducer, []);
  const target = document.querySelector('#_paperclips_3mma_0') ?? document.body;

  return (
    <AlertContext.Provider value={alerts}>
      <AlertDispatchContext.Provider value={setAlerts}>
        {alerts.length > 0
          ? createPortal(
              <AlertsComponent>
                {alerts.map((alert: Alert) => (
                  <AlertComponent
                    key={alert.id}
                    onClick={() => {
                      setAlerts({
                        type: 'deleted',
                        id: alert.id,
                      });
                    }}
                    {...alert}
                  />
                ))}
              </AlertsComponent>,
              target
            )
          : null}
        {children}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
}
