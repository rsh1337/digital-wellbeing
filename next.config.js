const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
	images: {
		domains: ['i.imgur.com', "picsum.photos"],
	},
	i18n: {
		locales: ['ro'],
		defaultLocale: 'ro'
	}
});
