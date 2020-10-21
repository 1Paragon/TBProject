// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
document.querySelector("nav > ul").classList.toggle("hidden--mobile")
});
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
axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
});
import "./env";
//const express = require{express};
//const morgan = require{morgan};
//const bodyParser = require{body-parser};
