/**
 * home-page router
 */

import { factories } from '@strapi/strapi';

export default {
    routes:[
        {method: 'GET', path: '/home-page', handler: 'home-page.find', config: {policies: [], middlewares: []}},
    ]
}