import { useState } from 'react';
import { SidebarComponent } from '../sidebar/Sidebar.component';
import styles from './Settings.module.scss';

export const SettingsComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!isOpen);

  return (
    <>
      <button className={styles.button} onClick={toggleSidebar}>
        settings
      </button>
      <SidebarComponent isOpen={isOpen} onclick={toggleSidebar} />
    </>
  );
};
