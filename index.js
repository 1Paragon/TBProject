import * as components from "./components";
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
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${header(st)}
  ${nav(state.Links)}
  ${main(st)}
  ${footer()}
  ${blog(st)}
  router.updatePageLinks();
 `;
}

render(state.home);
const router = new Navigo(window.location.origin);
// adding one route

router.on({
  "/": () => render(state.home),
  ":page": params => render(state[capitalize(params.page)])
});
resolve();
// adding more than one route
router.on({
  routeOne: () => console.log("Visiting Route One"),
  routeTwo: () => console.log("Visiting Route Two")
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
// array of pictures for gallery
//const robotPictures = newFunction();
//function newFunction() {
//  console.log(robotPictures.length);
//return robotPictures;
//const robotPictures = [
//{
//url:
//"https://raw.githubusercontent.com/1Paragon/TBProject/master/Photos/robots1a.jpg?raw=true",
//title:
//},
//url: "https://raw.githubusercontent.com/1Paragon/TBProject/master/Photos/robots2a.jpg?raw=true",
//title:
// },
//{
//url : "https://raw.githubusercontent.com/1Paragon/TBProject/master/Photos/robots3a.jpg?raw=true",
//title:
//}
// ]
//};
// populating gallery with pictures
const gallerySection = document.querySelector("#gallery");
robotPictures.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});

//Add event listeners here after rendering
function listenForJoinClick(st) {
  if (st.view === "Newform") {
    document.querySelector("#join-link").addEventListener("click", event => {
      event.preventDefault();
      render(state.Join);
    });
  }
}
console.log(document.getElementsByTagName("ul"));
console.log(document.querySelectorAll("ul"));
//listenForJoinClick(st);
// listenForHappenings(st);
// listenForAbout(st);
// listenForAdministration(st);

//import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
});

//const express = require{express};
//const morgan = require{morgan};
//const bodyParser = require{body-parser};
