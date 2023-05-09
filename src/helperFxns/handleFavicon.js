const handleFaviconChange = (newPath) => {
  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = newPath;
};

export default handleFaviconChange;
