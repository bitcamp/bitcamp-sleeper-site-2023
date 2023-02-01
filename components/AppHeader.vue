<template>
  <div class="rotating-div">
    <div class="header-container">
      <img class="header-floatie" src="/assets/img/floaties/top-rug.svg" />
      <div class="header-content">
        <img class="green-marshie" src="/assets/img/floaties/green-marshie.png" />
        <h1 class="header-title">registration is now open</h1>
        <div class="header-body">
          <RegisterButton />
          <p>Bitcamp returns on 4/7/2023 - 4/9/2023</p>
          <p>Follow us on our socials to stay updated!</p>

        </div>
        <SocialIcons />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SocialIcons from '~/components/SocialIcons.vue';
export default {
  name: 'AppHeader',
  components: { SocialIcons },
};
</script>

<style scoped>
@keyframes header-rotate {

  0%,
  100% {
    transform: rotate(17deg);
  }

  50% {
    transform: rotate(14deg);
  }
}

.rotating-div {
  /* animation: header-rotate 10s ease infinite reverse; */
  transform: rotate(17deg);
}

.header-container {
  position: relative;
  /* animation: floatie-bob 6s ease infinite reverse; */
}

.header-floatie {
  width: 100vw;
  margin-left: -15vw;
  margin-top: 0vw;
  margin-bottom: -20vw;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  position: absolute;
  text-align: right;
  align-items: flex-end;
  top: 15vw;
  right: 40vw;
  font-size: 1.7vw;
}

.header-title {
  line-height: 1.3;
  font-size: 3.5vw;
}

.header-body {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  gap: 1vw;
  width: 34vw;
}

.green-marshie {
  position: absolute;
  align-self: flex-start;
  transform: rotate(-17deg);
  width: 28vw;
  margin-top: -5vw;
  margin-left: -27vw;
}

/* mobile view - header size */
@media (max-width: 768px) {
  .header-floatie {
    width: 140vw;
    margin-left: -36vw;
    margin-top: 0vw;
    margin-bottom: -24vw;
  }

  .header-content {
    top: 18vw;
    right: 31vw;
    font-size: 3vw;
  }

  .header-title {
    font-size: 4vw;
    line-height: 1.2;
  }

  .header-body {
    line-height: 1.3;
    gap: 1.5vw;
  }

  .green-marshie {
    width: 36vw;
    margin-top: 4vw;
    margin-left: -25vw;
  }

  /* width: 36vw;
  margin-top: 11vw;
  margin-left: -31vw; */
}
</style>