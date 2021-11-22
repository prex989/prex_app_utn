const { Router } = require('express');
const res = require('express/lib/response');
const nodemailer = require('nodemailer');
const router = Router();



router.post('/send-email', async(req, res) => {
    const { name, email, tel, textomensaje, selector } = req.body;

    const contentHTML = `
        <h1>Información del Correo</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Dirección de Correo: ${email}</li>
            <li>Teléfono: ${tel}</li>
            <li>Motivo: ${selector}</li>
        </ul>
        <p>${textomensaje}</p>
    `;

    transporter = nodemailer.createTransport({
        pool: process.env.TRANSPOOL,
        host: process.env.TRANSHOST,
        port: process.env.TRANSPORT,
        secure: true, // use TLS
        auth: {
            user: "jlginmobiliaria2020@gmail.com",
            pass: "etjfeildvotgbtql",
        },
    });

    let info = await transporter.sendMail({
        from: process.env.MAILFROM,
        to: process.env.MAILTO,
        subject: process.env.MAILSUBJECT,
        html: contentHTML
    });
    console.log('message sent', info.messageId);
    // alertify.success('Ok');
    res.redirect('index');


});
module.exports = router;