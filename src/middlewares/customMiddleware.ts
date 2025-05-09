/**
 * `customMiddleware` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {

    strapi.log.info('================== Global customMiddleware middleware.==============');
    // ✅ Set custom response header
     ctx.set('customField', '123456789');


    await next();
  };
};
