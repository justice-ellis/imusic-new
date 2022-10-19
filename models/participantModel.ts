import { UUID, UUIDV4 } from 'sequelize';
import { Model, Sequelize, DataTypes} from 'sequelize';
import Users from '../models/roomModel';
import Rooms from '../models/roomModel'

export default class Participant extends Model {
    declare id?: number;
    public participantId!: string;
    public roomId!: string;
}


export const mapParticipant = (sequelize: Sequelize) => {
    Participant.init({
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true,
            primaryKey: false,
            allowNull: true

            },
        participantId: {
            type: DataTypes.UUID, 
            primaryKey: true,
            unique: true
            },
        roomId: {
            type: DataTypes.UUID, 
            allowNull: true,
            primaryKey: false 

            },

        },

    {

      sequelize,
      tableName: 'Participants',
      timestamps: true

    });

    //Participant.belongsTo(Users, { foreignKey: 'userId' });
    //Participant.hasOne(Rooms, { foreignKey: 'RoomId' });

    Participant.sync();
  }