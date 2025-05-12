export default {
  async find(ctx) {
    try {
      const result = await strapi
        .service("api::news-list.news-list")
        .fetchAndAddNews();
        console.log("result", result);
        
      ctx.send({ success: true, message: "News fetched and saved", data: result });
    } catch (err) {
      ctx.send({ success: false, error: err.message });
    }
  },
};
