let mix = require('laravel-mix');

class Eslint {
  /**
   * Basic webpack loader setup
   */
  constructor() {
    this.config = {
      enforce: 'pre',
      test: /\.(js|vue)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    };
  }

  /**
   * Ensure all required dependencies are installed
   */
  dependencies() {
    this.requiresReload = 'Dependencies have been installed. Please run "npm run (or yarn) dev" again.';

    return [
      'eslint',
      'prettier',
      'babel-eslint',
      'eslint-loader',
      'eslint-plugin-vue',
      'eslint-plugin-prettier',
      'eslint-config-prettier'
    ];
  }

  /**
   * Register custom options
   */
  register(options = {}) {
    this.options = options;
  }

  /**
   * Load Webpack Rules
   */
  webpackRules() {
    return {
      ...this.config,
      options: this.options
    }
  }
}

mix.extend('eslint', new Eslint());
