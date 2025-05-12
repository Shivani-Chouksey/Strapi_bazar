/**
 * product controller
 */

import {factories} from "@strapi/strapi";

export default factories.createCoreController("api::product.product", ({strapi}) => ({
  async find(ctx) {
    console.log("ctx value inside product", ctx.query);
    const { slug, category, subcategory } = ctx.query;
    const filters: any = {};
   if(slug && typeof slug === "string"&&slug.trim() !== ""){
filters.slug={$containsi:slug}
   }

    if(category && typeof category === "string"&&category.trim() !== ""){
      filters.categories={
        categroy_slug:{
          $eqi: category,
        }
      }
    }
if(subcategory && typeof subcategory === "string"&&subcategory.trim() !== ""){
  filters.sub_categories={
    subCategory_slug:{
      $eqi:subcategory,
    }
  }
}
    ctx.query={
      ...ctx.query,
      filters,
      populate:"*"
    }
    const data = await super.find(ctx);
    return data;
  },
}));
