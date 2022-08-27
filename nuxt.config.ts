import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  css: ['~/assets/css/global.css', '~/bitcamp-brand/bitcamp.css'],
  plugins: ['~/plugins/vue-kinesis.js'],
});
