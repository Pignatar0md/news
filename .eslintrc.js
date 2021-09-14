module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    'parserOptions': {
        project: './tsconfig.json',
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks'
    ],
    'rules': {
        'indent': [
            'error',
            2,
            { SwitchCase: 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            { avoidEscape: true }
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
    'settings': {
        react: { version: 'detect' },
    }
};
