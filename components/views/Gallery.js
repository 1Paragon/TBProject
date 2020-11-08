export default st => `
${st.Photogallery.reduce(
  (html, photo) => html + `<img src="${photo.url}" alt="${photo.title}">`,
  ``
)}`;
