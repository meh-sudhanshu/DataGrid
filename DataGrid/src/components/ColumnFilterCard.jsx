import { useState } from "react";
import styles from "./ColumnFilterCard.module.css"; // CSS module

export const ColumnFilterCard = () => {
  // Options array - scalable and easy to modify
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    { id: 3, label: "Option 3" },
    // Add more options here
  ];

  // State to manage checked items
  const [checkedItems, setCheckedItems] = useState({});

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles.card}>
      {/* Search input */}
      <div className={styles.cardHeader}>
        <input type="text" placeholder="Search..." aria-label="Search items" />
        <span className={styles.searchIcon}>&#128269;</span>
      </div>

      {/* Dynamic options */}
      <div className={styles.cardBody}>
        {options.map((option) => (
          <label key={option.id} className={styles.checkboxItem}>
            <input
              type="checkbox"
              checked={!!checkedItems[option.id]}
              onChange={() => handleCheckboxChange(option.id)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {/* Action buttons */}
      <div className={styles.cardFooter}>
        <button className={styles.includeBtn}>Include</button>
        <button className={styles.excludeBtn}>Exclude</button>
      </div>
    </div>
  );
};
