module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:import/recommended","prettier"],
    "plugins" : [
        "import", "html"
    ],    
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "semi": [
            "error",
            "always"
        ],
        // "off" or 0 - turn the rule off
        // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
        // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
        // "no-var": "off",
        "new-cap" : "off",
        "no-console": "off",
        "no-plusplus": "off",
        "no-shadow": "off",
        "vars-on-top": "off",
        "no-unused-vars": "off", 
        "no-underscore-dangle": "off", // var _foo;
        "comma-dangle": "off",
        "func-names": "off", // setTimeout(function () {}, 0);
        "prefer-template": "off",
        "no-nested-ternary": "off",
        "max-classes-per-file": "off",
        "consistent-return": "off",
        "no-restricted-syntax": ["off", "ForOfStatement"], // disallow specified syntax(ex. WithStatement)
        "prefer-arrow-callback": "error", // Require using arrow functions for callbacks
        "require-await": "error",
        "arrow-parens": ["error", "as-needed"], // a => {}
        "no-param-reassign": ["error", { "props": false }],
        "no-unused-expressions": ["error", {
            "allowTernary": true,      // a || b
            "allowShortCircuit": true, // a ? b : 0
            "allowTaggedTemplates": true
        }],
        // "import/no-extraneous-dependencies": ["error", { "includeInternal": true,"devDependencies": false }],
        "import/no-extraneous-dependencies": "off",
        "max-len": ["error", {
            "code": 120,
            "ignoreComments": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true
        }] // prettier의 printWidth 옵션 대신 사용
    }
};
