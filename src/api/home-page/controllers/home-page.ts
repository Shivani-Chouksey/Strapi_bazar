/**
 * home-page controller
 */

import { factories } from '@strapi/strapi'
import { log } from 'console';

export default factories.createCoreController('api::home-page.home-page',({strapi})=>({
   async find(ctx){
    console.log("ctx",ctx.query)
const locale:string=ctx.query.locale as string || "en";
    const entity=await strapi.documents('api::home-page.home-page').findOne({
        documentId:"erofpy3vz4jbrkdfdvd9kloc",
        locale,
            populate: {
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
            
                },
                dynamic_components:{
                    on:{
                        "testimonial.testimonial-section":{
                            populate:{
                                testimonials_list:{
                                    populate:{
                                        user:{
                                            populate:["profile_image"]
                                        }
                                    }
                                }
                
                      }
                
                    }
                
                }
                }
                
            }
        
    })


return {data:entity};
    }
}));
 
