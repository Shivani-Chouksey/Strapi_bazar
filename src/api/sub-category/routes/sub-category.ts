/**
 * sub-category router
 */

import { factories } from '@strapi/strapi';
import path from 'path';

export default{
    routes:[{
        method: "GET",
        path: "/sub-categories",
        handler: "sub-category.find",
        config: {
            policies: [],
            middlewares: [],
        },
    }]
}
