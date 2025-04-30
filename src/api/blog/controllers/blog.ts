/**
 * blog controller
 */

import {factories} from "@strapi/strapi";

export default factories.createCoreController("api::blog.blog", ({strapi}) => ({
  async find(ctx) {
    ctx.query.populate = "*";
    const data = await super.find(ctx);
    return data;
  },
}));
