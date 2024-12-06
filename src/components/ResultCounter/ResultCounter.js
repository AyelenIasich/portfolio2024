import React from "react";
import { useTranslation } from "react-i18next";

function ResultCounter({visibleItems, list}) {
  const { t } = useTranslation();

  return (
      <p className="label-category text-end">
        {t("ShowingResults", {
          current: Math.min(visibleItems, list.length),
          total: list.length,
        })}
      </p>
  );
}

export default ResultCounter;
