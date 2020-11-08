//import { Gallery } from "../../Photogallery.css";
export default st => `
<section>
$(st.Gallery.reduce(
  (html, photo) =>
   html +
   `<div id="Photogallery"><img src="${Photo.url}" alt="${Photo.title}"></div>`,
   ``
)}
</section>
`;

