console.log(document.getElementsByTagName("ul"));
console.log(document.querySelectorAll("ul"));

import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
});

import "./env";
