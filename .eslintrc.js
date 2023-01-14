const reactRules = {
  /**
   * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   * Мы отключаем это правило, потому что валидируем типы статически с помощью typescript.
   */
  'react/prop-types': 0,
};

const importRules = {
  'import-helpers/order-imports': [
    'warn',
    {
      newlinesBetween: 'never',
      groups: ['/^[a-z].*$/', '/^@.*$/', 'module', ['parent', 'sibling', 'index']],
      alphabetize: {order: 'asc'},
    },
  ],
};

const typescriptRules = {
  "@typescript-eslint/no-unsafe-call": 0,

  '@typescript-eslint/no-var-requires': 0,

  /** Предупреждаем о пустых функциях. */
  '@typescript-eslint/no-empty-function': ['warn'],

  /**
   * https://typescript-eslint.io/rules/restrict-template-expressions
   * Предупреждаем, если в шаблонную строку хотим вставить сомнительные значения.
   */
  '@typescript-eslint/restrict-template-expressions': [1, {allowNumber: true}],

  /**
   * https://typescript-eslint.io/rules/unbound-method
   * Предупреждаем, когда прокидывается функция по ссылке. Есть опасность потери this.
   */
  '@typescript-eslint/unbound-method': 'warn',

  /**
   * https://typescript-eslint.io/rules/ban-ts-comment
   * Разрешаем писать ts-* комменты, так как иногда нужно делать исключения.
   */
  '@typescript-eslint/ban-ts-comment': 0,

  /**
   * https://typescript-eslint.io/rules/no-unsafe-member-access
   * Предупреждаем, когда обращаемся к определенному полю типа any.
   */
  '@typescript-eslint/no-unsafe-member-access': 'warn',

  /**
   * https://typescript-eslint.io/rules/no-unsafe-assignment
   * Предупреждаем, когда присваиваем небезопасный тип.
   */
  '@typescript-eslint/no-unsafe-assignment': 'warn',

  /**
   * https://typescript-eslint.io/rules/no-unused-vars
   * Ругаемся, когда объявлены неиспользуемые переменные, кроме случаев, когда они явно нужны.
   */
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    },
  ],

  /**
   * https://typescript-eslint.io/rules/no-floating-promises
   * Предупреждаем о "висящих" промисах.
   */
  '@typescript-eslint/no-floating-promises': 'warn',
};

const jsdocRules = {
  /**
   * Обязательное jsDoc-описание всех функций.
   * https://github.com/gajus/eslint-plugin-jsdoc#require-description
   */
  'jsdoc/require-description': 1,

  /**
   * https://github.com/gajus/eslint-plugin-jsdoc#require-param
   * Отключаем обязательное описание параметров, а если параметры есть, то не указываем их типы, так как за это у нас отвечает ts.
   */
  'jsdoc/require-param': 0,
  'jsdoc/require-param-type': 0,

  /**
   * https://github.com/gajus/eslint-plugin-jsdoc#require-returns
   * Отключаем необходимость описания возвращаемого типа.
   */
  'jsdoc/require-returns': 0,
  'jsdoc/require-returns-type': 0,

  /**
   * https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-newline-after-description
   * Отключаем необходимость добавления новой строки после описания.
   */
  'jsdoc/newline-after-description': 0,

  /**
   * https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
   * Обязательно корректные теги.
   */
  'jsdoc/check-tag-names': ['error'],

  /**
   * Отключаем проверку переносов строк. Иногда они нужны.
   */
  'jsdoc/tag-lines': 0,

  /**
   * Делаем jsdoc'и в несколько строк обязательными к корректному форматированию.
   */
  'jsdoc/multiline-blocks': ['error'],
  'jsdoc/no-multi-asterisks': ['error'],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsdoc', 'eslint-plugin-import-helpers'],
  rules: {
    ...reactRules,
    ...importRules,
    ...typescriptRules,
    ...jsdocRules,
  },
  ignorePatterns: ['webpack', 'webpack.config.ts', '.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
