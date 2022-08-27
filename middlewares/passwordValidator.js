const passwordValidator = (req, res, next) => {
    const { password } = req.body;
    const passwordRegex = /\d{6}/;
    if (!password || password.length === 0) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

module.exports = passwordValidator;