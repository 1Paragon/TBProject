export default st => `
${st.Gallery.reduce(
  (html, photos) => html + `<img src="${photos.url}" alt="${photos.title}">`,
  ``
)}`;
