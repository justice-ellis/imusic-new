import { UUID, UUIDV4 } from 'sequelize';
import { Model, Sequelize, DataTypes} from 'sequelize';


export default class User extends Model {
    declare id?: number;
    public userId!: string;
    public name!: string;
    public email!: string;
    public password!: string;
}


export const mapUser = (sequelize: Sequelize) => {
    User.init({
      id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true,
      primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(), 
        allowNull: true,
        primaryKey: false
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      tableName: 'Users',
      timestamps: true
    });
    User.sync();
  }