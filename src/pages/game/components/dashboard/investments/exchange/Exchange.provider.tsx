import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { ExchangeContext } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.context.ts';
import { exchangeState } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.state.ts';
import { Token, TokenSymbol } from '@/src/pages/game/components/dashboard/investments/token/Token.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function ExchangeProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<Record<TokenSymbol, Token>>('_exchange_3mma_0', exchangeState);
  const [tokens, setTokens] = useState<Record<TokenSymbol, Token>>(storedState);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) => {
        const updated = { ...prev };
        for (const token of Object.keys(prev) as TokenSymbol[]) {
          const data = prev[token];
          const variation = +(Math.random() * 150 - 50); // -50 et 100
          const newPrice = +Math.max(0, data.price + variation);
          const newChange = variation;
          const newVolume = Math.max(0, data.volume + Math.random() * 100 - 50); // -50 et 50
          updated[token] = {
            ...data,
            price: newPrice,
            change: newChange,
            volume: newVolume,
          };
        }
        return updated;
      });
    }, 3e3);
    setStoredState(tokens);
    return () => clearInterval(interval);
  }, [tokens]);

  return <ExchangeContext.Provider value={{ tokens }}>{children}</ExchangeContext.Provider>;
}
