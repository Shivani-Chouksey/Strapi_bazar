export default {
  routes: [
    // ✅ Default route: Get all blogs
    {
      method: "GET",
      path: "/blogs",
      handler: "blog.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
