"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapNotification = void 0;
const sequelize_1 = require("sequelize");
class Notification extends sequelize_1.Model {
}
exports.default = Notification;
const mapNotification = (sequelize) => {
    Notification.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        notificationId: {
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
        type: {
            type: sequelize_1.DataTypes.ENUM('invite', 'message'),
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'Notifications',
        timestamps: true
    });
    Notification.sync();
};
exports.mapNotification = mapNotification;
//# sourceMappingURL=notificationModel.js.map