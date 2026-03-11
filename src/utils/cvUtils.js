export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/1nysXsQhGkEfZb_2cZwBHGjb6RL-Ph4Un/view?usp=drive_link" // cv spanish
      : "https://drive.google.com/file/d/1C5lwJNT5Xv9NKyIWqLZ0GtQ9w3-JRKIB/view?usp=drive_link"; // cv english

  window.open(cvUrl, "_blank");
};
