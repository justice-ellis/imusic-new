import { Model, Sequelize, DataTypes } from 'sequelize';

export default class privateMessage extends Model {
    public id?: number; 
    public communicationId?: string;
    public senderId!: string;
    public receiverId!: string;
    public text!: string;
    public seen?: boolean;
}

export const mapPrivatemessage = (sequelize: Sequelize) => {
    privateMessage.init({
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true, 
        primaryKey: true
      },
      communicationId: {
        type: DataTypes.STRING, 
        allowNull: true,
        primaryKey: false 
      },
      senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        
      },
      receiverId: {
        type: DataTypes.UUID,
        allowNull: false,
      
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seen: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'privateMessages',
      timestamps: true
    });
    privateMessage.sync();
};