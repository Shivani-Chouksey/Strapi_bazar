
import { env } from '@strapi/utils';
export default{

  async afterCreate(event) {
    const { result } = event;
    try {

      // Get all admin users
      // const adminUsers = await strapi.query("admin::user").findMany();
      // Get all subscribers (assuming you have a 'subscriber' collection)
      const subscribers = await strapi.query("api::blog.blog").findMany();
      // Get the "approver" role
      const approverRole = await strapi
        .query("admin::role")
        .findOne({ where: { name: "Approver" } });
        console.log("approverRole", approverRole);
      // Get all users with the "approver" role
      const approverUsers = await strapi.query("admin::user").findMany({
        where: { roles: { id: approverRole.id } },
      });
      console.log("approverUsers", approverUsers);
      // Extract emails of approver users
      const recipients = approverUsers.map((user) => user.email);
      console.log("recipients", recipients);
      // Send email notification if there are recipients
      console.log(env('SMTP_EMAIL'), env('SMTP_PASSWORD'));
      if (recipients.length > 0) {
        await strapi.plugins["email"].services.email.send({
          to: recipients,
          subject: `New Blog Post: ${result.title}`,
          html: `
            <h1>New Blog Post Published</h1>
            <h2>${result.title}</h2>
            <p>${result.description || "No description available"}</p>
            <p>Published on: ${new Date(result.publishedAt).toLocaleDateString()}</p>
          `,
        });
        // Log success
        strapi.log.info(
          `Email notification sent for blog post: ${result.title}`
        );
      } else {
        strapi.log.info("No approver users found to send email notification.");
      }
    } catch (error) {
      strapi.log.error("Error sending email notification:", error);
    }
  },
}