<template>
  <div class="app-container">
    <AppHeader />
    <PastEventsGrid />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import PastEventsGrid from '~/components/PastEventsGrid.vue';
import AppFooter from '~/components/AppFooter.vue';
export default {
  name: 'HomePage',
  components: { AppHeader, PastEventsGrid, AppFooter },
  head() {
    return {
      title: 'Bitcamp',
      meta: [
        {
          name: 'description',
          content:
            "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
        },
        {
          property: 'og:title',
          content: 'Bitcamp 2023',
        },
        {
          property: 'og:site_name',
          content: 'Bitcamp 2023',
        },
        {
          property: 'og:url',
          content: 'https://bit.camp/',
        },
        {
          property: 'og:description',
          content:
            "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'twitter:card',
          content: 'summary',
        },
        {
          property: 'twitter:url',
          content: 'https://bit.camp/',
        },
        {
          property: 'twitter:title',
          content: 'Bitcamp 2023',
        },
        {
          property: 'twitter:description',
          content:
            "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
        },
        {
          name: 'msapplication-TileColor',
          content: '#ff6f3f',
        },
        {
          name: 'msapplication-config',
          content: '/bitcamp-brand/favicons/browserconfig.xml',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/bitcamp-brand/bitcamp.css',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/bitcamp-brand/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/bitcamp-brand/favicons/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/bitcamp-brand/favicons/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/bitcamp-brand/favicons/safari-pinned-tab.svg',
          color: '#ff6f3f',
        },
        {
          rel: 'shortcut icon',
          href: '/bitcamp-brand/favicons/favicon.ico',
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100%;

  background-color: #cbf2ff;
  background-image: url('/assets/img/floaties/blobs.svg');
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
