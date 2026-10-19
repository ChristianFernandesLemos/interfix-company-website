import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    prettier,
    {
        files: ['server.js', 'src/**/*.js'],
        languageOptions: {
            sourceType: 'module',
            globals: globals.node,
        },
    },
    {
        files: ['js/**/*.js'],
        languageOptions: {
            sourceType: 'script',
            globals: globals.browser,
        },
    },
    {
        ignores: ['node_modules/'],
    },
];