
const { factories } = require("@strapi/strapi");
// module.exports = factories.createCoreRouter("api::news-list.news-list");
export default{
    routes:[{
        method: 'GET',
        path: '/news-list',
        handler: 'news-list.find',
        config: {
            policies: [],
            middlewares: [],
            auth: false,
        },
    }]
}