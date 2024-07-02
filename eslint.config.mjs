import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: 
    { 
      parserOptions: { 
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json" 
      } 
    } 
  },
  {languageOptions: 
    { globals: 
      globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  prettierConfig, // Menonaktifkan aturan ESLint yang bentrok dengan Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];