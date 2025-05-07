/**
 * home-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::home-page.home-page',({strapi})=>({
   async find(ctx){
ctx.query.populate = {
    hero_section:{
        populate: ['images'],
    },
    advertising_section:{
        populate: ['cover_image'],
    },
    category_section:{
       populate:{
        categories:{
            populate: ['cover_image'],
        }
       }
    },
    product_section:{
       populate:{
        products:{
            populate:["images","sub_categories","categories","reviewRating"],
           
        }
       }
    },
    blog_section:{
       populate:{
        blogs :{
         populate:["cover_image"]
        }
       }

    }

}
const data = await super.find(ctx);
return data;
    }
}));
 