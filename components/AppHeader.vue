<template>
  <div class="rotating-div">
    <div class="header-container">
      <div class="header-content">
        <img class="green-marshie" src="../assets/img/floaties/green-marshie.png" />
        <h1 class="header-title">shh... we’re on<br />vacation :)</h1>
        <p class="header-body">
          Bitcamp will return in 2023!<br />
          Follow us on our socials to be the first to know when<br />
          organizer applications and general registration opens!
        </p>
        <SocialIcons />
      </div>
      <img class="header-floatie" src="/assets/img/floaties/header-floatie.svg" />
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
@keyframes floatie-bob {

  0%,
  100% {
    -webkit-transform: translateY(1vw);
  }

  50% {
    -webkit-transform: translateY(-1vw);
  }
}

@-webkit-keyframes floatie-bob {

  0%,
  100% {
    -webkit-transform: translateY(1vw);
  }

  50% {
    -webkit-transform: translateY(-1vw);
  }
}

@keyframes floatie-rotate {

  0%,
  100% {
    -webkit-transform: rotate(17deg);
  }

  50% {
    -webkit-transform: rotate(14deg);
  }
}

@-webkit-keyframes floatie-rotate {

  0%,
  100% {
    -webkit-transform: rotate(17deg);
  }

  50% {
    -webkit-transform: rotate(14deg);
  }
}

.rotating-div {
  animation: floatie-rotate 10s ease infinite reverse;
  transform: rotate(17deg);
}

.header-container {
  position: relative;
  animation: floatie-bob 6s ease infinite reverse;
}

.header-floatie {
  margin-left: -15vw;
  margin-top: -10vw;
  width: 100vw;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 2vw;

  position: absolute;
  text-align: right;
  top: 10vw;
  right: 30vw;
}

.header-title {
  line-height: 1.3;
  font-size: 2.8vw;
}

.header-body {
  width: auto;
  font-size: 1.4vw;
}

.green-marshie {
  position: absolute;
  text-align: left;
  transform: rotate(-17deg);
  width: 29vw;
  margin-top: -5vw;
  margin-left: -30vw;
}
</style>
