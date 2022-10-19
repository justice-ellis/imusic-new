import { UUID, UUIDV4 } from 'sequelize';
import { Model, Sequelize, DataTypes} from 'sequelize';
import Users from '../models/roomModel';
import Rooms from '../models/roomModel';

export default class Invite extends Model {
    declare id?: number;
    public inviteId!: string;
    public senderId!: string;
    public receiverId!: string;
    public roomId!: string;
}


export const mapInvite = (sequelize: Sequelize) => {
    Invite.init({
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true,
            primaryKey: true,
            allowNull: true

            },
        inviteId: {
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
        roomId: {
            type: DataTypes.UUID, 
            allowNull: false

            },
            
        },

    {

      sequelize,
      tableName: 'Invites',
      timestamps: true

    });

    Invite.sync();
    
  }