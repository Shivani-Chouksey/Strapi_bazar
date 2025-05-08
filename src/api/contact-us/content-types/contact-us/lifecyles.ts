export default{
    async afterCreate(event) {
        const { result } = event;
try {
    console.log("afterCreate lifecycle triggered",result);
    const { email, name,subject } = result;

     // Prepare email details
   const  emailOptions={
        to:"shivanichouksey1702@gmail.com",
        subject:`New Contact Us Form Submission: ${subject}`,
        text: `A new contact us entry has been created by ${name}. Email: ${email}`,
    }

    // Send email using your preferred email service (e.g., nodemailer, sendgrid, etc.)
    await strapi.plugin("email").services.email.send(emailOptions);
    console.log("Email sent successfully", emailOptions);
    
} catch (error) {
    console.error("Error sending email:", error);
}
    }
}