<template>
  <div>
    <a href="https://www.instagram.com/bitcamp">
      <img src="/assets/img/icons/instagram.svg" class="social-icon" />
    </a>
    <a href="https://www.facebook.com/bitcmp">
      <img src="/assets/img/icons/facebook.svg" class="social-icon" />
    </a>
    <a href="https://twitter.com/bitcmp">
      <img src="/assets/img/icons/twitter.svg" class="social-icon" />
    </a>
    <a href="https://www.tiktok.com/@bitcamp_umd">
      <img src="/assets/img/icons/tiktok.svg" class="social-icon tiktok-icon" />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SocialIcons',
};
</script>

<style>
.social-icon {
  width: 3.5vw;
  height: 3.5vw;
  padding: 0.5vw;
  transition: padding 0.2s, width 0.2s, height 0.2s;
}

.social-icon:hover {
  width: 4.5vw;
  height: 4.5vw;
  padding: 0vw;
  transition: padding 0.2s, width 0.2s, height 0.2s;
}

.tiktok-icon {
  margin-left: -0.25vw;
  margin-right: -0.5vw;
}

/* mobile view - icon size */
@media (max-width: 768px) {
  .social-icon {
    width: 5vw;
    height: 5vw;
  }

  .social-icon:hover {
    width: 6vw;
    height: 6vw;
  }
}
</style>
