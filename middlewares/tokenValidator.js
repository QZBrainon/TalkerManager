const tokenValidator = (req, res, next) => {
    const { authorization } = req.headers;
    const minLength = 16;
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length < minLength || authorization === undefined) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
};

module.exports = tokenValidator;