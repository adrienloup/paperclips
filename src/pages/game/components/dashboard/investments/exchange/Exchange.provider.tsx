import { useEffect, useState } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { ExchangeContext } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.context.ts';
import { initialExchangeState } from '@/src/pages/game/components/dashboard/investments/exchange/Exchange.state.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
import { CryptoName } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';

import { Crypto } from '@/src/pages/game/components/dashboard/investments/crypto/Crypto.type.ts';

export function ExchangeProvider({ children }: { children: Children }) {
  const [storedState, setStoredState] = useLocalStorage<Record<CryptoName, Crypto>>(
    '_exchange_3mma_0',
    initialExchangeState
  );
  const [cryptos, setCryptos] = useState<Record<CryptoName, Crypto>>(storedState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptos((prev) => {
        const updated = { ...prev };

        for (const crypto of Object.keys(prev) as CryptoName[]) {
          const data = prev[crypto];
          const variation = +(Math.random() * 100 - 50).toFixed(2); // variation entre -50 et 50
          const newPrice = +Math.max(0, data.price + variation).toFixed(2);
          const newChange = variation;
          const newVolume = data.volume + Math.floor(Math.random() * 100) - 50;

          updated[crypto] = {
            ...data,
            price: newPrice,
            change: newChange,
            volume: Math.max(0, newVolume),
          };
        }

        return updated;
      });
    }, 3e3);

    setStoredState(cryptos);

    return () => clearInterval(interval);
  }, [cryptos]);

  return <ExchangeContext.Provider value={{ cryptos }}>{children}</ExchangeContext.Provider>;
}
