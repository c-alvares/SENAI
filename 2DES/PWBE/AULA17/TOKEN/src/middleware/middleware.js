// gerar o token
// validar o token
require('dotenv').config();
const jwt = require('jsonwebtoken');

const validaAcesso = (req, res, next)  => { //se der erro, vou utilizar o req.status 401(não autorizado)
    // console.log(req.headers);
    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null) res.status(404).json(err).end();
        else{
            if(data.role === "ADMIN") {
                next();
            }else {
                res.status(401).end();
            }
        }
        
    })

    res.status(200).end();
}

module.exports = {
    validaAcesso
}

