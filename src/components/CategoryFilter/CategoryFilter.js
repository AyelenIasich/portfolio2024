import React from "react";
import { useTranslation } from "react-i18next";
import "./CategoryFilter.css"

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const { t } = useTranslation();

  return (
    <div className="filter-container">
      <label htmlFor="categoryFilter" className="results-counter">{t("FilterLabel")}</label>
      <select
        id="categoryFilter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-select"
      >
        <option value="all">{t("ShowAll")}</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
