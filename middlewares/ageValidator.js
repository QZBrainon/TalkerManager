const ageValidator = (req, res, next) => {
    const { age } = req.body;
    const minAge = 18;
    if (!age || age === '') {
        return res.status(400).json({ message: 'O campo "age" é obrigatório' }); 
    }
    if (age < minAge) {
        return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
};

module.exports = ageValidator;