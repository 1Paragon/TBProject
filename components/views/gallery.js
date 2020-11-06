export default st => `
${st.Gallery.reduce(
  (html, Photogallery) =>
    html +
    `<img src="${Photogallery.url}" alt="${Photogallery.title}width="200" height="150">`,
  ``
)}`;
