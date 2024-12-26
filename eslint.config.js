import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
	{
		files: ['/**/*.ts', '/**/*.tsx', '*.config.js'],
		ignores: [
			'node_modules',
			'.yarn',
			'.vscode',
			'.idea',
			'.DS_Store',
			'dist',
			'dist-ssr',
			'logs',
			'dev-dist',
		],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				JSX: 'readonly',
				browser: true,
			},
			parser: typescriptParser,
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'simple-import-sort': simpleImportSort,
			'@typescript-eslint': typescriptEslint,
			'jsx-a11y': jsxA11y,
			prettier,
		},
		rules: {
			'prettier/prettier': ['error', {}, { usePrettierrc: true }],
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^@?\\w'],
						['^(@|Components)(/.*|$)'],
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						['^\\u0000'],
						['^.+\\.?(css)$'],
					],
				},
			],
			'simple-import-sort/exports': ['error'],
			'react-hooks/rules-of-hooks': ['error'],
			'react-hooks/exhaustive-deps': ['warn'],
			'jsx-a11y/anchor-is-valid': [
				'error',
				{
					components: ['Link'],
					specialLink: ['hrefLeft', 'hrefRight'],
					aspects: ['invalidHref', 'preferButton'],
				},
			],
		},
	},
];
