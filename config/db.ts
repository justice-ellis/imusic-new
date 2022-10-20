import { db_host, db_port, db_name, db_user, db_password, db_url } from './config';
require('dotenv').config();
import { Sequelize } from 'sequelize';

 export default new Sequelize({
  dialect: "postgres",
  host: db_host,
  port: db_port,
  database: db_name,
  username: db_user,
  password: db_password
});
//export default new Sequelize("postgres://tqflfjvofcxxuy:bc8cf446cd505e190e1fe100e078f631f40de83ff4ab3aee588be99ae28f4502@ec2-44-209-158-64.compute-1.amazonaws.com:5432/dbo1eeou2qo6hs") 

