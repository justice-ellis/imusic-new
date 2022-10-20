"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapInvite = void 0;
const sequelize_1 = require("sequelize");
class Invite extends sequelize_1.Model {
}
exports.default = Invite;
const mapInvite = (sequelize) => {
    Invite.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        inviteId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4(),
            primaryKey: true,
            allowNull: true
        },
        senderId: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: false,
            allowNull: false
        },
        receiverId: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        roomId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'Invites',
        timestamps: true
    });
    Invite.sync();
};
exports.mapInvite = mapInvite;
//# sourceMappingURL=inviteModel.js.map