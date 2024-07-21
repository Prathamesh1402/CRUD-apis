const Pool = require(`pg`).Pool ;

const pool=new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Patrikar@02",
    port: 5432,
});

module.exports = pool;