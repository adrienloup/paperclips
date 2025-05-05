import { Alert } from '@/src/generic/common/components/alerts/alert/Alert.type.tsx';

export type State = Alert[];

export type Action = { type: 'ADD_ALERT'; alert: Alert } | { type: 'REMOVE'; id: string };
