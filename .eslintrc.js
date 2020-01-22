module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "plugin:import/typescript",
        "plugin:protractor/recommended"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint",
        "protractor"
    ],
    rules: {
        "max-len": ["error", { "code": 120, "ignoreStrings": true }],
        "indent": ["error", "tab", {
			"SwitchCase": 1,
		}],
        "array-bracket-newline": ["error", "consistent"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
		"brace-style": "error",
        "comma-dangle": ["error", "only-multiline"],
		"comma-spacing": "error",
		"comma-style": "error",
		"eol-last": "error",
		"generator-star-spacing": "error",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "camelcase": "error",
        "eqeqeq": ["error", "always"],
        "object-shorthand": "error",
        "no-await-in-loop":"warn",
        "no-console":"error",
        "no-return-await": "error",
        "no-duplicate-imports": "error",
        "no-multi-spaces": "error",
        "no-template-curly-in-string": "warn",
        "no-trailing-spaces": "error",
        "no-useless-concat": "error",
        "no-whitespace-before-property": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quotes": [2, "single"],
        "semi": ["error"],
        "sort-imports": ["error", {
            "ignoreCase": true,
        }],
        "space-before-blocks": "error",
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
    },
};