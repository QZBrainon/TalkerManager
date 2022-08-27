const validateEmail = (req, res, next) => {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
    const { email } = req.body;
    if (!email || email.length === 0) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

module.exports = validateEmail;