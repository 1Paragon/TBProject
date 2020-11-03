import { linkSync } from "fs";
export default links => `
 <nav>
 <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  ${links
    .map(
      link => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
    )
    .join("")}
  </ul>
  </nav>`;

// if (link.title !== "Home") {
//   return link.title
// } else {
//   return ""
// };
//export default links => `
//<nav>
//  ${linkSync.reduce( html,link) => html +
//one of these entered for each of the nav files in views
//<ul>
//    `<li><a href="/${home.html !== "Home" ? home.html : "}" title="${
//     home.html
//   }" data-navigo>${home.text}</a></li>`,
//    `<li><a href="/${join.html !== "Home" ? join.html : "}" title="${
//      join.html
//    }" data-navigo>${join.text}</a></li>`,
//    `<li><a href="/${happenings.html !== "Home" ? happenings.html : "}" title="${
//      happenings.html
//    }" data-navigo>${happenings.text}</a></li>`,
//    `<li><a href="/${about.html !== "Home" ? about.html : "}" title="${
//      about.html
//    }" data-navigo>${about.text}</a></li>`,
//    `<li><a href="/${gallery.html !== "Home" ?gallery.html : "}" title="${
//      gallery.html
//    }" data-navigo>${gallery.text}</a></li>`,
//    `<li><a href="/${administration.html !== "Home" ? administration.html : "}" title="${
//      administration.html
//    }" data-navigo>${administration.text}</a></li>`,
//  </ul>
//</nav>
//}`;
