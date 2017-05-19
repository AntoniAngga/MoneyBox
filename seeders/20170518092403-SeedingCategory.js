'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        nama_category: 'John Doe',
        isBetaMember: false
      }, {}, {}, ], {});
    */
    return queryInterface.bulkInsert('Categories', [
    {
        nama_category : "BOOKSTORE & STATIONARY",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "ACCESSORIES & SOUVENIR",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "SPORTS",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "JEWELRY",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "SALON & MASSAGE",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "FASHION & LIFESTYLE",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "SERVICES",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "ELECTRONICS",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "DEPARTMENT STORES",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "HOBBIES & COLLECTIBLES",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "HEALTH & BEAUTY",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "TOOLS & HOME APPLIANCES",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "KIDS & EDUCATION",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "FOOD & BEVERAGES",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "TOUR & TRAVEL",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "IT & GADGETS",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "ENTERTAINMENT",
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        nama_category : "SUPERMARKET",
        createdAt : new Date(),
        updatedAt : new Date()
    }

  ],
    {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
