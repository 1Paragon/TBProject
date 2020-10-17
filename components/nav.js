import { linkSync } from "fs";

// if (link.title !== "Home") {
//   return link.title
// } else {
//   return ""
// };

export default() => `${
<nav>
  <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  <li>Home</li>
       <li>Join Us</li>
       <li>Happenings</li>
       <li>Keep in Touch</li>
       <li>About Us</li>
       <li>Administration</li>

    ${linkSync.reduce( html,link) => html +
//one of these entered for each of the nav files in views
    `<li><a href="/${bio.html !== "Home" ? Bio.html : "}" title="${
      Bio.html
    }" data-navigo>${bio.text}</a></li>`,



   //relative to views files
    <li><a href= "gallery.html">Gallery</a></li>
    <li><a href="register.html">Register</a></li>


    //all ends with
    )}
  </ul>
</nav>
`;
