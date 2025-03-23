import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import {
  AlertContext,
  AlertDispatchContext,
} from '@/src/generic/common/components/alert/Alert.context.ts';
import { alertReducer } from '@/src/generic/common/components/alert/Alert.reducer.ts';
import { AlertsComponent } from '@/src/generic/common/components/alert/Alerts.component.tsx';
import { AlertComponent } from '@/src/generic/common/components/alert/Alert.component.tsx';
import { Alert } from '@/src/generic/common/components/alert/Alert.type.tsx';
import { Children } from '@/src/generic/types/Children.type.ts';

export const AlertProvider = ({ children }: { children: Children }) => {
  const [alerts, setAlerts] = useReducer(alertReducer, []);

  return (
    <AlertContext.Provider value={alerts}>
      <AlertDispatchContext.Provider value={setAlerts}>
        {alerts.length
          ? createPortal(
              <AlertsComponent>
                {alerts.map((alert: Alert) => (
                  <AlertComponent
                    key={alert.id}
                    title={alert.title}
                    text={alert.text}
                    remove={() => setAlerts({ type: 'REMOVE', id: alert.id! })}
                  />
                ))}
              </AlertsComponent>,
              document.body
            )
          : null}
        {children}
      </AlertDispatchContext.Provider>
    </AlertContext.Provider>
  );
};
