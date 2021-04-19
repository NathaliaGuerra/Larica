const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {

    // req.baseUrl
    // req.originalUrl
    // req.method
    console.log(`pages${req.originalUrl}`);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let error = {};
        errors.array().map((err) => {
            error[err.param] = { msg: err.msg };
        });
        return res.render(`pages${req.originalUrl}`, { error });
    }

    next();
};
