import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
        <nav className={`${styles.nav} ${isSidebarOpen ? styles.open : ''}`}>
         <ul className={styles.ul}>
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
        </ul>
      </nav>

        <button
        className={`${styles.toggleButton}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? '✖' : '☰'}
      </button>
    </>
  );
};

export default Sidebar;
