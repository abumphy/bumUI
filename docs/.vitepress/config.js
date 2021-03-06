module.exports = {
	base: '/',
	lang: 'en-US',
	title: 'BumUI',
	description: '一个vue3的组件库',
	themeConfig: {
		nav: [
			{ text: '组件', link: '/guide/install', activeMatch: '^/$|^/guide/' },
			{
				text: '更新日志',
				link: 'https://github.com/abumphy/bumUI/releases',
			},
		],
		sidebar: {
			'/guide/': getGuideSidebar(),
			'/': getGuideSidebar()
		},
	},
};

function getGuideSidebar() {
	return [
		{
			text: '开发指南',
			children: [
				{ text: '安装', link: '/guide/install' },
				{ text: '快速上手', link: '/guide/quickstart' },
			],
		},
		{
			text: '组件',
			children: [
				{ text: 'layout', link: '/components/layout' },
				{ text: 'container', link: '/components/container' },
			],
		},
	];
}
