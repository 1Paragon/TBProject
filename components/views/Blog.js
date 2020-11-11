export default st => `
<section id="Blog">
<h4>If you would like to
    keep in touch and stay
    informed about Paragon
    Organization's latest happenings</h4>
<h3>Please check out our Blog</h3>

${st.posts
  .map(post => {
    formatBlogPost(post);
  })
  .join()}
</section>`;
function formatBlogPost(post) {
  return formatBlogPost`
  <div class="blog-post">
    <h4>${post.title} by User ${post.userId}</h4>
    <p>${post.body}</p>
  </div>`;
}
