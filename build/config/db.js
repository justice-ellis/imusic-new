"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const sequelize_1 = require("sequelize");
//  export default new Sequelize({
//   dialect: "postgres",
//   host: db_host,
//   port: db_port,
//   database: db_name,
//   username: db_user,
//   password: db_password
// });
exports.default = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: "ec2-44-209-158-64.compute-1.amazonaws.com",
    port: 5432,
    database: "dbo1eeou2qo6hs",
    username: "tqflfjvofcxxuy",
    password: "bc8cf446cd505e190e1fe100e078f631f40de83ff4ab3aee588be99ae28f4502"
});
// export default new Sequelize("postgres://tqflfjvofcxxuy:bc8cf446cd505e190e1fe100e078f631f40de83ff4ab3aee588be99ae28f4502@ec2-44-209-158-64.compute-1.amazonaws.com:5432/dbo1eeou2qo6hs") 
//# sourceMappingURL=db.js.map