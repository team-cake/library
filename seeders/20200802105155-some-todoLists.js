'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'todoLists',
			[
				{
					name: 'check yourself',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'dont wreck yourself',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('todoLists', null, {})
	},
}
