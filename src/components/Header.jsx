import React from "react";
import styles from "./Header.module.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search triggered for:", searchTerm); 
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/logo.png" 
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Search Tweets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        onKeyDown={handleKeyDown} 
      />
    </header>
  );
};

export default Header;

