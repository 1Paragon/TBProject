import * as components from "./components"
import * as state from "./store";
// importing all as a Module object, import statements always go at the top of the file
// importing all by name
import { header, nav, main, footer, blog } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";
import { resolve } from "path";
// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
document.querySelector("nav > ul").classList.toggle("hidden--mobile")
});
render(state.home);
const router = new Navigo(window.location.origin);
// adding one route
router.on({"/": () => render(state.home),
 ":page": params => render(state[capitalize(params.page)])
})
 resolve();
// adding more than one route
router.on({
  "routeOne": () => console.log("Visiting Route One"),
  "routeTwo": () => console.log("Visiting Route Two")
});

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${header(st)}
  ${nav(state.Links)}
  ${main(st)}
  ${footer()}
  ${blog(st)}
 `;
 router.updatePageLinks();
 listenForJoinClick(st);
 listenForHappenings(st);
 listenForAbout(st);
 listenForAdministration(st);
}
function listenForJoinClick(st) {
  if (st.view ==="Newform") {
    document.querySelector("#join-link").addEventListener("click", event => {
    event.preventDefault();
    render(state.Join);
  });
 }
}
// array of pictures for gallery
const dogPictures = [
  {
    url:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "sunglass doggo"
  },
//put your pictures in here with this format
}
];
// populating gallery with pictures
const gallerySection = document.querySelector("#gallery");
dogPictures.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});
// handle form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});

console.log(document.getElementsByTagName("ul"));
console.log(document.querySelectorAll("ul"));
//Add event listeners here after rendering



//import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
});

//const express = require{express};
//const morgan = require{morgan};
//const bodyParser = require{body-parser};
