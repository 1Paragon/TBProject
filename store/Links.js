axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
  const params = router.lastRouteResolved().params;
  if (params) {
    render(state[params.page]);
  }
});
