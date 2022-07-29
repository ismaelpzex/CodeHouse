const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users.model');

const checkToken = async (req, res, next) => {
    // COMPROBAMOS SI EL TOKEN VIENE EN LA CABECERA
    if (!req.headers['authorization']) return res.status(403).json({ error: 'Necesitas la cabecera de autorización' });
    // EXTRAEMOS EL TOKEN
    const token = req.headers['authorization'];
    //COMPROBAMOS SI EL TOKEN SE PUEDE DECODIFICAR
    let payload;
    try {
        payload = jwt.verify(token, 'clave para decodificar token');
    } catch (error) {
        return res.status(401).json({ error: 'el token no es correcto' });
    }
    // COMPROBAMOS LA CADUCIDAD DEL TOKEN
    if (dayjs().unix() > payload.exp_date) return res.status(401).json({ error: 'token caducado' });

    // EXTRAEMOS AL USUARIO QUE HA HECHO LA PETICIÓN Y LO INSERTAMOS EN LA PETICIÓN
    req.user = await Users.getById(payload.user_id);

    next();
}

const checkAdmin = (req, res, next) => {
    //compruebo si el roll es admin o no para dar permiso
    if (req.user.roll !== "admin") return res.status(401).json({ error: 'no tienes permisos' });
    next();
}

module.exports = { checkToken, checkAdmin };