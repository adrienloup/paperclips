import { createContext } from 'react';
import { Exchange } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.type.ts';

export const ExchangeContext = createContext<Exchange | undefined>(undefined);
