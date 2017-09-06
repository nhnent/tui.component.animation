module.exports = {
    "extends": "tui/es6",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "classes": true,
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "amd": true,
        "node": true,
        "jasmine": true,
        "es6": true,
        "commonjs": true
    },
    "globals": {
        "tui": true,
        "fixture": true
    },
    "rules": {
        "lines-around-directive": 0,
        "newline-before-return": 0,
        "padding-line-between-statements": [2,
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: "directive", next: "*" }, { blankLine: "any", prev: "directive", next: "directive" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"}, { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}
        ],
        "sort-imports": "error",
        "no-useless-rename": "error",
        "no-duplicate-imports": ["error", { "includeExports": true }],
        "dot-notation": ["error", { "allowKeywords": true }],
        "prefer-destructuring": [
            "error", {
                "VariableDeclarator": {
                    "array": true,
                    "object": true
                },
                "AssignmentExpression": {
                    "array": false,
                    "object": false
                }
            },
            {
                "enforceForRenamedProperties": false
            }
        ],
        "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
        "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }]
    }
}
