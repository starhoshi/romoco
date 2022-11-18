module.exports = {
  extends: ["next/core-web-vitals", "standard", "prettier", "plugin:storybook/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  }
};