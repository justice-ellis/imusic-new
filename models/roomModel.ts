import { UUID, UUIDV4 } from 'sequelize';
import { Model, Sequelize, DataTypes} from 'sequelize';


export default class Room extends Model {
    declare id?: number;
    public roomId!: string;
    public name!: string;
    public description!: string;
    public roomType!: string;
    public ownerId!: number;
    public photo!: string;
    public status!: string;
    public allow_invite!: boolean;
    public playlistId!: string;
}


export const mapRoom = (sequelize: Sequelize) => {
    Room.init({
        id: {
            type: DataTypes.BIGINT, 
            autoIncrement: true,
            allowNull: true

            },
        roomId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4(), 
            primaryKey: true 

            },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false

            },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false

            },
        roomType: {
            type: DataTypes.ENUM('private', 'public'),
            allowNull: true,
            defaultValue: 'public'

            },
        ownerId: {
            type: DataTypes.BIGINT,
            allowNull: false

            },
        photo: {
            type: DataTypes.STRING,
            allowNull: true

            },
        status: {
            type: DataTypes.ENUM('admin'),
            allowNull: true

            },
        allow_invite: {
            type: DataTypes.BOOLEAN,
            allowNull: true

            },
        playlistId: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4(), 
            allowNull: true,
            primaryKey: false 

            }
    }, {
      sequelize,
      tableName: 'Rooms',
      timestamps: true
    });
    Room.sync();
  }