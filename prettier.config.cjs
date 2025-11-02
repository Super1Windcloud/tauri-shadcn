/** @type {import('prettier').Config} */
module.exports = {
	endOfLine: "lf",
	semi: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "es5",
	printWidth: 100,
	plugins: [
		require.resolve("@ianvs/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	importOrder: [
		"^(react/(.*)$)|^(react$)",
		"^(vite/(.*)$)|^(vite$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/dashboard/(.*)$",
		"^@/components/(.*)$",
		"^@/hooks/(.*)$",
		"^@/lib/(.*)$",
		"^@/styles/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx"],
};
