module.exports = {
	css: {
		extract: true,
		sourceMap: true
	},
	pwa: {
		name: "Resume",
		iconPaths: {
			favicon32: "img/favicon/favicon-32x32.png",
			favicon16: "img/favicon/favicon-16x16.png",
			appleTouchIcon: "img/favicon/apple-icon-152x152.png",
			maskIcon: "img/icons/safari-pinned-tab.svg",
			msTileImage: "img/icons/android-icon-192x192.png"
		},
		themeColor: "#00b1ff",
		msTileColor: "#00b1ff",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",

		// configure the workbox plugin
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			// swSrc is required in InjectManifest mode.
			swSrc: "dev/sw.js",
		}
	}
};
