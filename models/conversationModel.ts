import { Model, Sequelize, DataTypes} from 'sequelize';


export default class conversation extends Model {
    declare id?: number;
    public members!: [];
    public message!: string;
}


export const mapConversation = (sequelize: Sequelize) => {
    conversation.init({
      members: {
      type: DataTypes.ARRAY, 
      primaryKey: true
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'conversation',
      timestamps: true
    });
    conversation.sync();
  }