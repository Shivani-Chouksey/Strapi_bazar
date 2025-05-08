
"use strict";

module.exports = {
  async submit(ctx) {
    try {
        console.log("ctx query",ctx.request.body);
        console.log("ctx files",ctx.request.files)
      // Access the form data from the request body
      const formData = ctx.request.body;
      formData.submittedAt = new Date().toISOString();
      // Use the service to create a new form entry and send the email
      const response = await strapi.entityService.create("api::contact-us.contact-us",{
        data:formData,
      });
      if(ctx.request.files &&Object.keys(ctx.request.files).length>0){
        await strapi.plugins["upload"].services.upload.uploadToEntity({
            id: response.id,
            model: "api::contact-us.contact-us",
            field: "attachment",
            files: ctx.request.files.attachment,
          });
      }

      // Return the structured response
      return ctx.send({ success: true, data: response });
    } catch (error) {
      // Handle errors
      return ctx.badRequest("An error occurred", { error: error.message });
    }
  },
};
