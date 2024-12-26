export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/11yJYIjsGPs3WXwfeJ452mkH-OamJU8lz/view?usp=sharing" // cv spanish
      : "https://drive.google.com/file/d/13dDcDDjjgPx72LR8WqkQqhBlYtXoTz-V/view?usp=sharing"; // cv english

  window.open(cvUrl, "_blank");
};
