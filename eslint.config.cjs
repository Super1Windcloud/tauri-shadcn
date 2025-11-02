const tseslint = require("typescript-eslint");
const eslint = require("@eslint/js");
const reactPlugin = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");
const globals = require("globals");

const ignores = [
	"node_modules/**",
	"dist/**",
	"coverage/**",
	"src-tauri/**",
	"src/components/icons/**",
	"src/components/ui/**",
];

module.exports = tseslint.config(
	{ ignores },
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
		],
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooks,
			"jsx-a11y": jsxA11y,
			import: importPlugin,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		settings: {
			react: { version: "detect" },
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			...(reactPlugin.configs["jsx-runtime"]?.rules ?? {}),
			...(jsxA11y.configs.recommended?.rules ?? {}),
			"@typescript-eslint/unified-signatures": "off",
			"react/prop-types": "off",
			"@typescript-eslint/prefer-nullish-coalescing": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"jsx-a11y/no-autofocus": "off",
			"no-console": ["warn", { allow: ["warn", "error", "info"] }],
		},
	},
	{
		files: ["**/*.test.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
		rules: {
			"import/no-extraneous-dependencies": "off",
		},
	},
);
