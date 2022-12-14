import nodemailer from 'nodemailer'
import dotenv from "dotenv"

dotenv.config()

const email = process.env.EMAIL,
    email_password = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: email,
            pass: email_password,
        }
    }
)

const mailOptions = {
    from: `<${email}>`,
    to: email
}

export default async function Mailer(data) {

    console.log(data)

    const newData = {
        ...mailOptions,
        subject: `Запрос на обратный звонок ${data.name}`,
        html: `<h1>Новый запрос на обратную связь</h1><p>Имя: ${data.name}</p><p>Телефон: ${data.phone}</p><p>Почка: ${data.email}</p><p>Комментарии: ${data.comments}</p>`,
    }

    await transporter.sendMail(newData, (err, info) => {
        if (err) return console.log(err)
    })
}
