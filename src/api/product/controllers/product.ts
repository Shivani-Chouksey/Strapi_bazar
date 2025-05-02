/**
 * product controller
 */

import {factories} from "@strapi/strapi";

export default factories.createCoreController("api::product.product", ({strapi}) => ({
  async find(ctx) {
    console.log("ctx value inside product", ctx.query);
    console.log(ctx.query.name);
    // Safely assert that ctx.query.name is a string, or undefined
    const name: string | undefined = typeof ctx.query.name === "string" ? ctx.query.name : undefined;

    // Initialize filters only if needed
    if (name && name?.trim() !== "" && name != undefined) {
      ctx.query.filters = {
        name: {$containsi: name},
      };
    }

    ctx.query.populate = "*";
    const data = await super.find(ctx);
    return data;
  },
}));
