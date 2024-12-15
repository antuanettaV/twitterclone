import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faSearch, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={`${styles.nav} ${isSidebarOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <FontAwesomeIcon icon={faHome} className={styles.icon} />
            <span className={styles.menuText}>Home</span>
          </li>
          <li className={styles.menuItem}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <span className={styles.menuText}>Explore</span>
          </li>
          <li className={styles.menuItem}>
            <FontAwesomeIcon icon={faBell} className={styles.icon} />
            <span className={styles.menuText}>Notifications</span>
          </li>
          <li className={styles.menuItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span className={styles.menuText}>Messages</span>
          </li>
        </ul>

        <button className={styles.postButton}>Post</button>

        <div className={styles.profileContainer}>
          <img
            src="https://www.artguru.ai/_next/image/?url=https%3A%2F%2Fimg.artguru-cdn.com%2Fimage%2Faigc%2F6ae75db857ae39839c39c49ce9c058f5_1024_1024.webp&w=1080&q=100"
            alt="Profile"
            className={styles.profilePicture}
          />
          <p className={styles.profileName}>Christina S</p>
        </div>
      </nav>

      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
