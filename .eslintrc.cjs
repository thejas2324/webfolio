module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/prop-types": ["error"],
    "react/no-unknown-property": [
      "error",
      {
        "ignore": ["castShadow", "receiveShadow", "args", "polygonOffset", "polygonOffsetFactor"]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
};
