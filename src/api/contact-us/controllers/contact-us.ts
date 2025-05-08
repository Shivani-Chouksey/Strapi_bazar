
// "use strict";

// module.exports = {
//   async submit(ctx) {
//     try {
//         console.log("ctx query",ctx.request.body);
//         console.log("ctx files",ctx.request.files)
//       // Access the form data from the request body
//       const formData = ctx.request.body;
//       formData.submittedAt = new Date().toISOString();
//       // Use the service to create a new form entry and send the email
//       const response = await strapi.entityService.create("api::contact-us.contact-us",{
//         data:formData,
//       });
//       const { files } = ctx.request;
//       if(files?.attachment) {
//        const uploadedFiles= await strapi.service("plugin::upload.upload").upload({
//            data:{
//             refId: response.id,
//             ref: "api::contact-us.contact-us",
//             field: "attachment",
//            },
//            files: files.attachment,

//           });
//           // Optional: Log uploaded files
//         console.log("Uploaded files:", uploadedFiles);
//       }

//       // Return the structured response
//       return ctx.send({ success: true, data: response });
//     } catch (error) {
//       // Handle errors
//       return ctx.badRequest("An error occurred", { error: error.message });
//     }
//   },
// };



module.exports = {
  async submit(ctx) {
    try {
      const formData = ctx.request.body;
      formData.submittedAt = new Date().toISOString();

      // Step 1: Create the contact entry
      const contactEntry = await strapi.entityService.create("api::contact-us.contact-us", {
        data: formData,
      });

      // Step 2: Handle file upload if present
      const { files } = ctx.request;
      if (files?.attachment) {
        const uploadedFiles = await strapi.service("plugin::upload.upload").upload({
          data: {},
          files: files.attachment,
        });

        // Step 3: Manually update the entry with media relation
        const fileIds = uploadedFiles.map(file => file.id);

        await strapi.entityService.update("api::contact-us.contact-us", contactEntry.id, {
          data: {
            attachment: fileIds.length === 1 ? fileIds[0] : fileIds,
          },
        });
      }

      return ctx.send({ success: true, data: contactEntry });
    } catch (error) {
      console.error("Submit error:", error);
      return ctx.badRequest("An error occurred", { error: error.message });
    }
  },
};
