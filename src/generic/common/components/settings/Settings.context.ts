import { createContext, Dispatch } from 'react';
import { Settings } from '@/src/generic/common/components/settings/Settings.type.ts';
import { initialSettings } from '@/src/generic/common/components/settings/Settings.state.ts';

export const SettingsContext = createContext<Settings>(initialSettings);
export const SettingsDispatchContext = createContext<Dispatch<Settings>>(() => {});
