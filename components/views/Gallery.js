export default st => `
${st.photogallery.reduce(
  (html, photo) => html + `<img src="${photo.url}" alt="${photo.title}">`,
  ``
)}`;
