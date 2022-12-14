import Mailer from "./Mailer.js"
import { PhoneValidator, EmailValidator } from "../middleware/validator.js"


export const CallMe = async (req, res) => {
    try {
        const { phone, name, email, comments } = req.body

        if (EmailValidator(email) || PhoneValidator(phone)) {
            console.log("OK")
            Mailer(req.body)
            return res.status(202).json({ message: 'OK' })
        }

        return res.status(400).json({ error: 'not data' })

    } catch (error) {

    }
}