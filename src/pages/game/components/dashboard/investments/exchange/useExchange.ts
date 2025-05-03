import { useContext } from 'react';
import { ExchangeContext } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.context.ts';
import { Exchange } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.type.ts';

export const useExchange = (): Exchange => {
  const context = useContext(ExchangeContext);
  if (!context) throw new Error('useExchange must be used within ExchangeProvider');
  return context;
};
