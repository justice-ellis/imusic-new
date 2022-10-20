"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapParticipant = void 0;
const sequelize_1 = require("sequelize");
class Participant extends sequelize_1.Model {
}
exports.default = Participant;
const mapParticipant = (sequelize) => {
    Participant.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: false,
            allowNull: true
        },
        participantId: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            unique: true
        },
        roomId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: true,
            primaryKey: false
        },
    }, {
        sequelize,
        tableName: 'Participants',
        timestamps: true
    });
    //Participant.belongsTo(Users, { foreignKey: 'userId' });
    //Participant.hasOne(Rooms, { foreignKey: 'RoomId' });
    Participant.sync();
};
exports.mapParticipant = mapParticipant;
//# sourceMappingURL=participantModel.js.map