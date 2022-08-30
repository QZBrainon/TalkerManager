const rateValidator = (req, res, next) => {
    const { talk: { rate } } = req.body;
    const minRate = 1;
    const maxRate = 5;
    if (!rate && rate !== 0) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    if (rate < minRate || rate > maxRate) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};

module.exports = rateValidator;