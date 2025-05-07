/**
 * sub-category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::sub-category.sub-category',({ strapi }) => (
    {
        async find(ctx){
            const filters: any = {};
            const slug: string | undefined = typeof ctx.query.slug === "string" ? ctx.query.slug : undefined;

       ctx.query.populate={
        products:{
            populate:{
                images: true,
                current_price: true,
                old_price: true,
                reviewRating: true,
                sub_categories: true,
            categories:true

            },
        }
       }
       if (slug?.trim()) {
        filters.subCategory_slug={$containsi: slug}
       }
       ctx.query.filters=filters;
       const data=await super.find(ctx);
       return data;
        }
    }
));
