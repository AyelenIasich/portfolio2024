import React from "react";
import { useTranslation } from "react-i18next";
import "./ResultCounter.css"

function ResultCounter({visibleItems, list, total}) {
  const { t } = useTranslation();

  return (
      <p className="results-counter-display text-end">
        {t("ShowingResults", {
          current: Math.min(visibleItems, list.length),
          total: total.length,
        })}
      </p>
  );
}

export default ResultCounter;
