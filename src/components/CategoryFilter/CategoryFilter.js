import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./CategoryFilter.css";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (categoryKey) => {
    onCategoryChange(categoryKey);
    setIsOpen(false);
  };
  return (
    <div className="container-category-filter">
    <p className="label-category pe-3">{t("FilterLabel")}</p>
      <div className="dropdown-container">
        <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
          {categories.find((cat) => cat.key === selectedCategory)?.value ||
            t("ShowAll")}
          <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
            <RiArrowDropDownLine className="arrow-dropdown" />
          </span>
        </div>
        {isOpen && (
          <div className="dropdown-options">
            {categories.map((category) => (
              <div
                key={category.key}
                className="dropdown-option"
                onClick={() => handleCategoryClick(category.key)}
              >
                {category.value}
              </div>
            ))}
            <div
              className="dropdown-option"
              onClick={() => handleCategoryClick("all")}
            >
              {t("ShowAll")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryFilter;
