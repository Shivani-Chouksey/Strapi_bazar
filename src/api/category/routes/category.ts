/**
 * category router
 */

import {factories} from "@strapi/strapi";

export default {
  routes: [
    {
      method: "GET",
      path: "/categories",
      handler: "category.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
