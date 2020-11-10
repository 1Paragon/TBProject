import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";
//import { resolve } from "path";
//const express = require{express};
//const morgan = require{morgan};
//const bodyParser = require{body-parser};

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}`;
  router.updatePageLinks();

  addNavEventListeners();
}
router
  .on({
    "/": () => render(state.Home),
    ":view": params => render(state[capitalize(params.view)])
  })
  .resolve();
// changed from ":page":
// handle form submission
document.querySelector("form").addEventListener("click", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});
//array for Gallery
const Photogallery = [
  {
    url:
      "https://github.com/1Paragon/TBProject/blob/master/Photogallery/robots1ab.jpg?raw=true",
    title: "vex iq robotics competition elementary school division 2019"
  },
  {
    url:
      "https://github.com/1Paragon/TBProject/blob/master/Photogallery/robots2ac.jpg?raw=true",
    title: "vex iq robotics competition elementary school division 2019"
  }
];

let Thumbnails = newFunction();
function newFunction() {
  console.log(Photogallery.length);
  return Photogallery;
}
// populating gallery with pictures
const gallerySection = document.querySelector("#Gallery");
Photogallery.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});
//wrong?
// const gallerySection = document.querySelector("#Gallery");
// picture.forEach(Photogallery => {
//   let img = document.createElement("img");
//   img.src = `${Photogallery.url}`;
//   img.alt = `${Photogallery.title}`;
//   gallerySection.appendChild(img);
// });
//Add event listeners here after rendering
function listenForJoinClick(st) {
  if (st.view === "Newform") {
    document.querySelector("#join-link").addEventListener("click", event => {
      event.preventDefault();
      render(state.Join);
    });
  }
}

//addNavEventListeners();
function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}
console.log(document.getElementsByTagName("ul"));
console.log(document.querySelectorAll("ul"));
//listenForJoinClick(st);
//listenForMyButton(st);
// listenForHappenings(st);
// listenForAbout(st);
// listenForAdministration(st);
//function changeImage(event)
//{
//  event =event || window.event;
//  let targetElement = event.target || event.srcElement;
//  if(targetElement.tagname === "IMG")
// }
//  {
//   document.getElementById("mainImage").src = targetElement.getAttribute(src);
//  }
//};
// axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
//   response.data.forEach(post => {
//     state.Blog.posts.push(post);
