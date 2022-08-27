<template>
  <div class="social">
    <a href="https://www.facebook.com/bitcmp">
      <img src="/assets/img/icons/fb.svg" class="social-icon" />
    </a>
    <a href="https://twitter.com/bitcmp">
      <img src="/assets/img/icons/twitter.svg" class="social-icon" />
    </a>
    <a href="https://www.instagram.com/bitcamp">
      <img src="/assets/img/icons/ig.svg" class="social-icon" />
    </a>
    <a href="https://www.snapchat.com/add/bitcamp">
      <img src="/assets/img/icons/snap.svg" class="social-icon" />
    </a>
    <a href="https://medium.com/@bitcmp">
      <img src="/assets/img/icons/medium.svg" class="social-icon" />
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
  transition: opacity 0.2s, padding 0.2s, width 0.2s, height 0.2s;
}

.social-icon:hover {
  width: 4.5vw;
  height: 4.5vw;
  padding: 0vw;
  transition: opacity 0.2s, padding 0.2s, width 0.2s, height 0.2s;
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
