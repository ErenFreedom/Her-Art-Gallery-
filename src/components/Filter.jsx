// src/components/Filter.jsx

import React, { useState } from 'react';
import styles from '../styles/Filter.module.css';
import { FaCaretDown } from 'react-icons/fa';

const Filter = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterClick = (filter) => {
    setFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className={styles.filterContainer}>
      <button className={styles.filterButton} onClick={toggleDropdown}>
        Filter <FaCaretDown />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <button onClick={() => handleFilterClick('today')}>Today</button>
          <button onClick={() => handleFilterClick('week')}>Last Week</button>
          <button onClick={() => handleFilterClick('month')}>This Month</button>
          <button onClick={() => handleFilterClick('year')}>This Year</button>
          <button onClick={() => handleFilterClick('all')}>All Time</button>
        </div>
      )}
    </div>
  );
};

export default Filter;
