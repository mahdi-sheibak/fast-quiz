const config = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "jsx-a11y"],
	extends: [
		"next",
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:tailwindcss/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"],
		EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
	},
	env: {
		es6: true,
		commonjs: true,
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: "detect",
		},
		tailwindcss: {
			callees: ["cn"],
			config: "tailwind.config.cjs",
		},
		next: {
			rootDir: ["apps/*/"],
		},
	},
	// overrides: [
	// 	{
	// 		files: ["*.ts", "*.tsx"],
	// 		parser: "@typescript-eslint/parser",
	// 	},
	// ],
	rules: {
		quotes: ["warn", "double"],
		eqeqeq: "warn",
		"no-await-in-loop": "warn",
		"no-else-return": "warn",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"react/prop-types": "off",
		"@typescript-eslint/no-misused-promises": [
			2,
			{ checksVoidReturn: { attributes: false } },
		],
		"tailwindcss/no-custom-classname": "off",
		"tailwindcss/classnames-order": "error",
		"@next/next/no-html-link-for-pages": "off",
	},
}

module.exports = config
