"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapConversation = void 0;
const sequelize_1 = require("sequelize");
class conversation extends sequelize_1.Model {
}
exports.default = conversation;
const mapConversation = (sequelize) => {
    conversation.init({
        members: {
            type: sequelize_1.DataTypes.ARRAY,
            primaryKey: true
        },
        message: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'conversation',
        timestamps: true
    });
    conversation.sync();
};
exports.mapConversation = mapConversation;
//# sourceMappingURL=conversationModel.js.map