export default [
  { title: "home", text: "home" },
  { title: "join", text: "join" },
  { title: "happenings", text: "happenings" },
  { title: "about", text: "about" },
  { title: "administration", text: "administration" },
  { title: "blog", text: "blog" }
];

axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
  const params = router.lastRouteResolved().params;
  if (params) {
    render(state[params.page]);
  }
});
