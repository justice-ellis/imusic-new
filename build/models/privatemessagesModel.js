"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPrivatemessage = void 0;
const sequelize_1 = require("sequelize");
class privateMessage extends sequelize_1.Model {
}
exports.default = privateMessage;
const mapPrivatemessage = (sequelize) => {
    privateMessage.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        communicationId: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            primaryKey: false
        },
        senderId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        receiverId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
        text: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        seen: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'privateMessages',
        timestamps: true
    });
    privateMessage.sync();
};
exports.mapPrivatemessage = mapPrivatemessage;
//# sourceMappingURL=privatemessagesModel.js.map