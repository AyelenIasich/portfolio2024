export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/1ggtnaNIgspyEn4_NOoMVZjCXcUQXjRi1/view?usp=drive_link" // cv spanish
      : "https://drive.google.com/file/d/1jlta-3PPlMCNfmC3RfNV28maChdoZxvC/view?usp=drive_link"; // cv english

  window.open(cvUrl, "_blank");
};
