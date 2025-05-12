export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  // 'global::customMiddleware', // Custom middleware
  
  // ✅ Your custom middleware runs after routes
  {
    name: 'global::customMiddleware',
    config: {},
  },

];
