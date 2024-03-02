const db = require('../db');
const bcrypt = require('bcrypt');


exports.get_user_by_email = async (email) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    const result = await db.query(sql, [email]);
    if (result.length > 0) {
        return result[0];
    }
    return null;
}