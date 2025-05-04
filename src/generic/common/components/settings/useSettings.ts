import { useContext } from 'react';
import { SettingsContext, SettingsDispatchContext } from '@/src/generic/common/components/settings/Settings.context.ts';

export const useSettings = () => useContext(SettingsContext);
export const useSettingsDispatch = () => useContext(SettingsDispatchContext);
