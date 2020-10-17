const express = require{express};
const morgan = require{morgan};
const bodyParser = require{body-parser};

document.querySelector(".fa-bars").addEventListener("click", () => {
document.querySelector("nav > ul").classList.toggle("hidden--mobile")
});

console.log(document.getElementsByTagName("ul"));
console.log(document.querySelectorAll("ul"));
//Add event listeners here after rendering

import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
});

import "./env";
