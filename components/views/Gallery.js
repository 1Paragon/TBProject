export default st => `
<section>
${st.pics.reduce(
  (html, Photogallery) =>
    html + `<img src="${Photogallery.url}" alt="${Photogallery.title}">`,
  ``
)}
</section>
`;
