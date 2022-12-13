

export const CallMe = async (req, res) => {
    try {
        const { phone, name, email, comments } = req.body

        console.log(req.body)

        if (email || phone) {
            console.log("OK")
            return res.status(202).json({ message: 'OK' })
        }

        console.log("NO OK")
        return res.status(400).json({ error: 'not data' })

    } catch (error) {

    }
}