export default ({env}) => ({
    upload: {
        enabled:true
    },
    // email: {
    //     config: {
    //       provider: "nodemailer", // or any other provider like SendGrid, Mailgun
    //       providerOptions: {
    //         host: "smtp.gmail.com",
    //         port: env("SMTP_PORT"),
    //         auth: {
    //           user: env("SMTP_EMAIL"), // Your email
    //           pass: env("SMTP_PASSWORD"), // Your email password
    //         },
    //       },
    //       settings: {
    //         defaultFrom: env("SMTP_EMAIL"),
    //         defaultReplyTo: env("SMTP_EMAIL"),
    //       },
    //     },
    //   },
});
