export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/12KBdzj8QAt01kId7ryOO1YiAOys9hAyT/view?usp=sharing" // cv spanish
      : "https://drive.google.com/file/d/1wuaVlXsBzati71-P2vFBXKN5dEcnJSYO/view?usp=sharing"; // cv english

  window.open(cvUrl, "_blank");
};
