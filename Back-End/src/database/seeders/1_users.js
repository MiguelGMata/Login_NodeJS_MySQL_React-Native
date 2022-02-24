'use strict';

const vet = require('../seeds/user')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Users", vet("Users"), {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};