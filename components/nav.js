import { linkSync } from "fs";

// if (link.title !== "Home") {
//   return link.title
// } else {
//   return ""
// };

export default links => `
<nav>
 <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  ${links.map(Link =>`<li><a href="/${link.title}" data-navigo>${link.text}</a</li>`)
  .join("")}
  </ul>
  </nav>`;

    ${linkSync.reduce( html,link) => html +
//one of these entered for each of the nav files in views
    `<li><a href="/${bio.html !== "Home" ? Bio.html : "}" title="${
      Bio.html
    }" data-navigo>${bio.text}</a></li>`,
  </ul>
</nav>
}`;

// <i class="fas fa-bars"></i>
  //<ul class="hidden--mobile nav-links">

