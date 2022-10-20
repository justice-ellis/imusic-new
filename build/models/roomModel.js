"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRoom = void 0;
const sequelize_1 = require("sequelize");
class Room extends sequelize_1.Model {
}
exports.default = Room;
const mapRoom = (sequelize) => {
    Room.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: true
        },
        roomId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4(),
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false
        },
        roomType: {
            type: sequelize_1.DataTypes.ENUM('private', 'public'),
            allowNull: true,
            defaultValue: 'public'
        },
        ownerId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false
        },
        photo: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('admin'),
            allowNull: true
        },
        allow_invite: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true
        },
        playlistId: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: sequelize_1.DataTypes.UUIDV4(),
            allowNull: true,
            primaryKey: false
        }
    }, {
        sequelize,
        tableName: 'Rooms',
        timestamps: true
    });
    Room.sync();
};
exports.mapRoom = mapRoom;
//# sourceMappingURL=roomModel.js.map