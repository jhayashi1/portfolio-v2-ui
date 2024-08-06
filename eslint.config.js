import react from 'eslint-plugin-react';
import parser from '@typescript-eslint/parser';

const commonRules = {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: 'error',
    'comma-dangle': ['error', {
        arrays: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
        objects: 'always-multiline',
    }],
    'quote-props': ['error', 'as-needed'],
}

const reactRules = {
    'react/jsx-sort-props': [2,
        {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
        },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', { when: 'always', maximum: 2}],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
}

export default [{
    plugins: {
        react,
    },
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
        parser,
        ecmaVersion: 12,
        globals: {
            browser: true,
            commonjs: true,
            es2021: true,
            webextensions: true,
        },
    },
    rules: {
        ...commonRules,
        ...reactRules
    },
    ignores: ['dist/**'],
}];