module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true
  },
  extends: [
    "airbnb-base",
    "jquery",
    "plugin:jquery/slim"
  ],
  plugins: [
    "jquery"
  ],
  rules: {
    "prefer-arrow-callback": "off",
    quotes: "off",
    "func-names": "off",
    "space-in-parens": "off",
    "no-plusplus": "off"
  }
};
