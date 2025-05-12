export default{
    fetchNewsEvery2Minutes: {
        task:async ({ strapi }) => {
            console.log("Runing cron Job : Fetching news every 2 minutes");
            await strapi.service("api::news-list.news-list").fetchAndAddNews();
        },
        options:{
            rule: "*/2 * * * *",
            // rule: "0 0 * * *", // Every day at midnight
            // rule: "0 0 * * 1", // Every Monday at midnight
            // rule: "0 0 1 * *", // First day of every month at midnight
            // rule: "0 0 1 1 *", // First day of January at midnight
        }
    }
}