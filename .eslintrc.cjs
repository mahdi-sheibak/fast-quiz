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
	rules: {
		quotes: ["warn", "double"],
		eqeqeq: "warn",
		"no-await-in-loop": "warn",
		"no-else-return": "warn",
		"react/prop-types": "off",
		"react/display-name": 1,
		"react/no-unknown-property": 0,
		"@typescript-eslint/no-misused-promises": [
			2,
			{ checksVoidReturn: { attributes: false } },
		],
		"tailwindcss/no-custom-classname": "off",
		"tailwindcss/classnames-order": "error",
		"@next/next/no-html-link-for-pages": "off",
	},
};

module.exports = config;
