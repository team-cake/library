'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'todoItems',
			[
				{
					name: 'Clean up house',
					deadline: 'tomorrow noon',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Buy groceries',
					deadline: 'tomorrow at 5pm',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('todoItems', null, {})
	},
}
