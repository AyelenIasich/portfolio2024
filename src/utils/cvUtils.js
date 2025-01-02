export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/1olCw6sNu3xJ8FFCZVlGrl2kbMB3L2KfJ/view?usp=sharing" // cv spanish
      : "https://drive.google.com/file/d/1HGBEVFISTMBT-5zCED5bQ3g0bQ_5MynP/view?usp=sharing"; // cv english

  window.open(cvUrl, "_blank");
};
