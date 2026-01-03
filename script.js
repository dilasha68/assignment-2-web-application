// Blog data stored in variables
const blogs = [
  {
    id: 1,
    title: "Learning HTML and CSS",
    content:
      "HTML structures the web, while CSS styles it. Together they form the foundation of web development.",
    image: "images/htmlcss.jpg"
  },
  {
    id: 2,
    title: "Introduction to JavaScript",
    content:
      "JavaScript allows you to add interactivity and dynamic content to web pages.",
    image: "images/javascript.jpg"
  }
];

// BLOG LIST PAGE
const blogContainer = document.getElementById("blogContainer");
if (blogContainer) {
  blogContainer.innerHTML = "";
  blogs.forEach((blog) => {
    blogContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${blog.image}" class="card-img-top blog-card-img" alt="${blog.title}">
          <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <a href="blog_detail.html?id=${blog.id}" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    `;
  });
}

// BLOG DETAIL PAGE
const blogDetail = document.getElementById("blogDetail");
if (blogDetail) {
  const params = new URLSearchParams(window.location.search);
  const blogId = Number(params.get("id"));
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    blogDetail.innerHTML = `
      <div class="alert alert-warning">
        No blog selected. Go back to the blog list and click "Read More".
      </div>
    `;
  } else {
    blogDetail.innerHTML = `
      <div class="row">
        <div class="col-md-8 mx-auto">
          <h2 class="mb-3">${blog.title}</h2>
          <img src="${blog.image}" class="img-fluid blog-image" alt="${blog.title}">
          <p>${blog.content}</p>
        </div>
      </div>
    `;
  }
}
