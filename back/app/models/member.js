const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Member extends Model {}

Member.init({
    name: DataTypes.TEXT,
}, {
    sequelize,
    tableName: 'member',
});

module.exports = Member;