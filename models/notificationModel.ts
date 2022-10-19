import { UUID, UUIDV4 } from 'sequelize';
import { Model, Sequelize, DataTypes} from 'sequelize';
import Users from '../models/roomModel';
import Rooms from '../models/roomModel';

export default class Notification extends Model {
    declare id?: number;
    public notificationId!: string;
    public senderId!: string;
    public receiverId!: string;
    public type!: string;
}


export const mapNotification = (sequelize: Sequelize) => {
    Notification.init({
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true,
            primaryKey: true,
            allowNull: true

            },
        notificationId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4(), 
            primaryKey: true,
            allowNull: true

            },
        senderId: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false

            },
        receiverId: {
            type: DataTypes.STRING, 
            allowNull: false

            },
        type: {
            type: DataTypes.ENUM('invite', 'message'), 
            allowNull: true

            },
            
        },

    {

      sequelize,
      tableName: 'Notifications',
      timestamps: true

    });

    Notification.sync();

  }