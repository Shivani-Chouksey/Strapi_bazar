/**
 * product router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::product.product');

export default {
  routes: [
    // ✅ Default route: Get all Prodcuts
    {
      method: "GET",
      path: "/products",
      handler: "product.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
