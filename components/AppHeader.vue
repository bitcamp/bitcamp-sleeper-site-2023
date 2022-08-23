<template>
  <div class="header-container">
    <img class="header-floatie" src="/assets/img/floaties/header-floatie.svg" />
    <h1 class="header-title">shh... we’re on<br />vacation :)</h1>
    <p class="header-body">
      Bitcamp will return in 2023!<br />
      Follow us on our socials to be the first to know when<br />
      organizer applications and general registration opens!
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header-container {
  position: relative;
}

.header-floatie {
  margin-left: -15vw;
  margin-top: -10vw;
  width: 100vw;
}

.header-title {
  position: absolute;
  color: white;
  text-align: right;
  line-height: 1.3;
  transform: rotate(17deg);

  font-size: 2.8vw;
  top: 18vw;
  right: 28vw;
}

.header-body {
  position: absolute;
  color: white;
  text-align: right;
  transform: rotate(17deg);

  width: auto;
  font-size: 1.4vw;
  top: 25vw;
  right: 31vw;
}
</style>
