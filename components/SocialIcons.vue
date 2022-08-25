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
.social {
}

.social-icon {
  width: 3.5vw;
  height: 3.5vw;
  padding: 0.25vw;
  transition: opacity 0.2s, padding 0.2s, width 0.2s, height 0.2s;
}

.social-icon:hover {
  width: 4vw;
  height: 4vw;
  padding: 0px;
  transition: opacity 0.2s, padding 0.2s, width 0.2s, height 0.2s;
}
</style>
