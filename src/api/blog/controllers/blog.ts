/**
 * blog controller
 */

import {factories} from "@strapi/strapi";

export default factories.createCoreController("api::blog.blog", ({strapi}) => ({
  async find(ctx) {
    ctx.query.populate = {
      cover_image: true,
      blog_categories: true,
      blog_tags: true,
    };
    const filters: any = {};
    const category: string | undefined =typeof ctx.query.category === "string" ? ctx.query.category : undefined;
    const tag: string | undefined = typeof ctx.query.tag === "string" ? ctx.query.tag : undefined;
    const slug: string | undefined = typeof ctx.query.slug === "string" ? ctx.query.slug : undefined;
    if (slug?.trim()) {
      filters.slug = { $eq: slug };  }
      if (category?.trim()) {
      filters.blog_categories = { slug: { $containsi: category } };
    }
    if (tag?.trim()) {
      filters.blog_tags = { slug: { $containsi: tag } };
    }
    ctx.query.filters = filters;
    const data = await super.find(ctx);
    return data;
  },
}));
