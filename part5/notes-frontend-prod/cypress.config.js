const { defineConfig } = require('cypress')

module.exports = defineConfig({
	plugins: ['jest'],
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
	env: {
		'jest/globals': true,
	},
})
