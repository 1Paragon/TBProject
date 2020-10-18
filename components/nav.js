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
  <li><a href="index.html>Home<a/></li>
  <li><a href="header.html>Join Us</a></li>
  <li><a href="main.html">Happenings</a></li>
 <li><a href="main.html">Keep in Touch</a></li>
 <li><a href="main.html">About Us</a></li>
 <li><a href="main.html">Administration</a></li>

    ${linkSync.reduce( html,link) => html +
//one of these entered for each of the nav files in views
    `<li><a href="/${bio.html !== "Home" ? Bio.html : "}" title="${
      Bio.html
    }" data-navigo>${bio.text}</a></li>`,

   )};
  </ul>
</nav>
