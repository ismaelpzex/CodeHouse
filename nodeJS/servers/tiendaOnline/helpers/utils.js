const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const createToken = (user) => {
    const payload = {
        user_id: user._id,
        role: user.role,
        expiration: dayjs().add(2, 'hour')
    }
    return jwt.sign(payload, process.env.SECRET_KEY);
}
module.exports = { createToken };