import { Alert } from '@/src/generic/common/component/alert/Alert.type.tsx';

export type State = Alert[];

export type Action = { type: 'ADD'; alert: Alert } | { type: 'REMOVE'; id: string };
