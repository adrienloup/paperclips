import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import {
  AlertsContext,
  AlertsDispatchContext,
} from '@/src/generic/common/components/alerts/Alerts.context.ts';
import { alertsReducer } from '@/src/generic/common/components/alerts/Alerts.reducer.ts';
import { AlertsComponent } from '@/src/generic/common/components/alerts/Alerts.component.tsx';
import { AlertComponent } from '@/src/generic/common/components/alert/Alert.component.tsx';
import { Alert } from '@/src/generic/common/components/alert/Alert.type.tsx';
import { Children } from '@/src/generic/types/Children.type.ts';

export const AlertsProvider = ({ children }: { children: Children }) => {
  const [state, dispatch] = useReducer(alertsReducer, []);

  return (
    <AlertsContext.Provider value={state}>
      <AlertsDispatchContext.Provider value={dispatch}>
        {state.length
          ? createPortal(
              <AlertsComponent>
                {state.map((alert: Alert) => (
                  <AlertComponent
                    key={alert.id}
                    text={alert.text}
                    status={alert.status}
                    remove={() => dispatch({ type: 'REMOVE', id: alert.id! })}
                  />
                ))}
              </AlertsComponent>,
              document.body
            )
          : null}
        {children}
      </AlertsDispatchContext.Provider>
    </AlertsContext.Provider>
  );
};
