/**
 * `customRouteMiddleware` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('===========In customRouteMiddleware middleware.==============');
    await next();

 // ✅ Add additional field to the response data while preserving the original response
 if (ctx.body && typeof ctx.body === 'object') {
  ctx.body = {
    ...ctx.body,
    customRouteField: 'injected from route middleware',
  };
}
  };
};
