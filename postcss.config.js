const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["index.html", "./**/*.html", "./**/*.js"],
	options: {
		safelist: [/^html/, /"light"^/, /^light-/],
	},
});
const cssnano = require("cssnano")({
	preset: [
		"default",
		{
			minifyGradients: true,
			minifyFontValues: true,
			uniqueSelectors: true,
			normalizeWhitespace: true,
			normalizePositions: true,
			normalizeUrl: true,
			normalizeDisplayValues: true,
			minifySelectors: true,
			minifyParams: true,
			discardEmpty: true,
			mergeIdents: true,
			mergeLonghand: true,
			mergeRules: false,
			minifySelectors: true,
			reduceIdents: true,
			cssDeclarationSorter: true,
			reducetransforms: true,
			discardOverriden: true,
			discardduplicates: true,
			discardComments: true,
		},
	],
});
module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-import"),
    require("postcss-nested"),
    require("autoprefixer"),
		cssnano,
		...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
};