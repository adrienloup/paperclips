import { Action, State } from '@/src/generic/common/components/alert/Alert.type.ts';

export const alertReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      console.log(action.alert);
      // const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
      // const alert = state.map((alert) => (alert.id === action.id ? { ...alert, enable: true } : alert));
      //return state.find((alert) => alert.id === action.alert.id);
      return [...state, action.alert];
    //           ? [
    //             ...state.notifications,
    //             {
    //               id: action.id,
    //               text: action.text,
    //             },
    //           ]
    //           : state.notifications,;
    // case 'DELETE':
    //   return {
    //     ...state,
    //     notifications: state.notifications.filter((notif) => notif.id !== action.id),
    //   };
    // case 'NOTIFY':
    //   return {
    //     ...state,
    //     notify: action.notify,
    //   };
    default:
      return state;
  }
};

// import { Action, State } from '@/src/game/components/notifications/repository/Notification.type.ts';
//
// export const notificationReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         notifications: !state.notifications.find((notif) => notif.id === action.id)
//           ? [
//             ...state.notifications,
//             {
//               id: action.id,
//               text: action.text,
//             },
//           ]
//           : state.notifications,
//         notify: true,
//       };
//     case 'DELETE':
//       return {
//         ...state,
//         notifications: state.notifications.filter((notif) => notif.id !== action.id),
//       };
//     case 'NOTIFY':
//       return {
//         ...state,
//         notify: action.notify,
//       };
//     default:
//       return state;
//   }
// };
