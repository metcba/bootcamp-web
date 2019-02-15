const nodemailer = require('nodemailer');
module.exports = (form) => {
    var transporter = nodemailer.createTransport({
        host: "mail.metcba.org",
        port: 465,
        //secure: false, // upgrade later with STARTTLS
        auth: {
            user: 'burner@metcba.org', // Cambialo por tu email
            pass: 'sD8bG=#HxJU{' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `”${form.name} 👻” <${form.email}>`,
        to: 'milagro@metcba.org', // Cambia esta parte por el destinatario
        subject: "Testing contact form",
        html: `
        <strong>Nombre:</strong> ${form.name} <br/>
        <strong>E-mail:</strong> ${form.email} <br/>
        <strong>Mensaje:</strong> ${form.message}
        `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("There has been an error!");
            console.log(err)
        } else {
            console.log("Email sent!");
            // TODO add here the confirmation for the user!
            console.log(info);
        }
        });
}