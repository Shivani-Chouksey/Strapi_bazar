// /**
//  * category controller
//  */

// import {factories} from "@strapi/strapi";

// export default factories.createCoreController("api::category.category", ({strapi}) => ({
//   async find(ctx) {
//     console.log("ctx query", ctx.query);

//     ctx.query.populate = {
//       products: {
//         populate: {
//           images: true,
//           current_price: true,
//           old_price: true,
//           //   categories: true,
//           sub_categories: true,
//           reviewRating: true,
//         },
//       },
//     };

//     ctx.query.filters={

//     }
//     // Safely assert that ctx.query.name is a string, or undefined
//     const name: string | undefined = typeof ctx.query.name === "string" ? ctx.query.name : undefined;
//     const sub_category: string | undefined = typeof ctx.query.name === "string" ? ctx.query.sub_category : undefined;

//     // Initialize filters only if needed
//     if (name && name?.trim() !== "" && name != undefined) {
//       ctx.query.filters = {
//         name: {$containsi: name},
//       };
//     }
//     const data = await super.find(ctx);
//     return data;
//   },
// }));

/**
 * category controller
 */

import {factories} from "@strapi/strapi";

export default factories.createCoreController("api::category.category", ({strapi}) => ({
  async find(ctx) {
    console.log("ctx query", ctx.query);

    const name: string | undefined = typeof ctx.query.name === "string" ? ctx.query.name : undefined;
    const subCategory: string | undefined = typeof ctx.query.sub_category === "string" ? ctx.query.sub_category : undefined;

    // Build filters
    const filters: any = {};

    if (name?.trim()) {
      filters.name = {$containsi: name};
    }

    if (subCategory?.trim()) {
      filters.products = {
        sub_categories: {
          subCategory_slug: {
            $containsi: subCategory,
          },
        },
      };
    }

    // Assign filters and populate
    ctx.query.filters = filters;

    ctx.query.populate = {
      products: {
        populate: {
          images: true,
          current_price: true,
          old_price: true,
          sub_categories: true,
          reviewRating: true,
        },
      },
    };

    const data = await super.find(ctx);
    return data;
  },
}));
