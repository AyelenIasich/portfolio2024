export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/1MRo-jU20nSDkXg1Jjb_sTGIqerBd7I02/view?usp=sharing" // cv spanish
      : "https://drive.google.com/file/d/1S14nYFpnpenh-hj0xI6Y_rZARgRl5sOu/view?usp=sharing"; // cv english

  window.open(cvUrl, "_blank");
};
