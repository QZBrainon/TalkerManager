const nameValidator = (req, res, next) => {
    const { name } = req.body;
    const regex = /.{3}/;

    if (!name || name.length === 0) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (!regex.test(name)) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
};

module.exports = nameValidator;
