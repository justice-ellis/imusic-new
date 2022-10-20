"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
require('dotenv').config();
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: config_1.db_host,
    port: config_1.db_port,
    database: config_1.db_name,
    username: config_1.db_user,
    password: config_1.db_password
});
//export default new Sequelize("postgres://tqflfjvofcxxuy:bc8cf446cd505e190e1fe100e078f631f40de83ff4ab3aee588be99ae28f4502@ec2-44-209-158-64.compute-1.amazonaws.com:5432/dbo1eeou2qo6hs") 
//# sourceMappingURL=db.js.map