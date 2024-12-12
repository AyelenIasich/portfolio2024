export const handleDownloadCV = (language) => {
  const cvUrl =
    language === "es"
      ? "https://drive.google.com/file/d/1n9DFid7lGlGzn9uMY7EpkRpz4GQsvlUl/view?usp=sharing" // cv spanish
      : "https://drive.google.com/file/d/1Pn8OqAzcxS7w0ie5pHke17TndPbgIOIQ/view?usp=sharing"; // cv english

  window.open(cvUrl, "_blank");
};
