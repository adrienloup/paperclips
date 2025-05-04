import { Dispatch, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { useTranslation } from 'react-i18next';
import { SettingsContext, SettingsDispatchContext } from '@/src/generic/common/components/settings/Settings.context.ts';
import { initialSettings } from '@/src/generic/common/components/settings/Settings.state.ts';
import { Settings } from '@/src/generic/common/components/settings/Settings.type.ts';
import { Children } from '@/src/generic/types/Children.type.ts';

export function SettingsProvider({ children }: { children: Children }) {
  const [settings, setSettings] = useLocalStorage<Settings>('_settings_3mma_0', initialSettings);
  const { i18n } = useTranslation();
  const settingsRef = useRef<Settings>(settings);

  const changeLanguage = useCallback((newSettings: Settings) => {
    i18n.changeLanguage(newSettings.language).then(() => undefined);
    document.documentElement.lang = newSettings.language;
  }, []);

  const changeClasses = useCallback((newSettings: Settings) => {
    document.body.classList.toggle('_dusk_3mma_0', newSettings.universe === 'dusk');
    document.body.classList.toggle('_tumult_3mma_0', newSettings.universe === 'tumult');
    document.body.classList.toggle('_cataclysm_3mma_0', newSettings.universe === 'cataclysm');
    document.body.classList.toggle('_classic_3mma_0', newSettings.theme === 'classic');
    document.body.classList.toggle('_clubbed-to-death_3mma_0', newSettings.theme === 'clubbed-to-death');
    document.body.classList.toggle('_dark_3mma_0', newSettings.mode === 'dark' || newSettings.mode === 'system');
    document.body.classList.toggle('_light_3mma_0', newSettings.mode === 'light');
  }, []);

  const changeSettings: Dispatch<Settings> = useCallback(
    (newSettings: Settings) => {
      settingsRef.current = newSettings;
      changeClasses(newSettings);
      changeLanguage(newSettings);
      setSettings(newSettings);
    },
    [changeClasses, setSettings]
  );

  useLayoutEffect(() => {
    settingsRef.current = settings;
    changeClasses(settings);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      changeSettings({ ...settingsRef.current, mode: event.matches ? 'dark' : 'light' });
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={changeSettings}>{children}</SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}
