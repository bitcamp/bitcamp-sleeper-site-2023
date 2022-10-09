<template>
  <div class="rotating-div">
    <div class="header-container">
      <img
        class="header-floatie"
        src="/assets/img/floaties/header-floatie.svg"
      />
      <div class="header-content">
        <img
          class="green-marshie"
          src="/assets/img/floaties/green-marshie.png"
        />
        <h1 class="header-title">shh... we’re on<br />vacation :)</h1>
        <div class="header-body">
          <p>Bitcamp will return in 2023!</p>
          <p>
            Follow us on our socials to be the first to know when registration
            opens!
          </p>
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
  animation: header-rotate 10s ease infinite reverse;
}

.header-container {
  position: relative;
  animation: floatie-bob 6s ease infinite reverse;
}

.header-floatie {
  width: 100vw;
  margin-left: -15vw;
  margin-top: -10vw;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 2vw;

  position: absolute;
  text-align: right;
  align-items: flex-end;
  top: 10vw;
  right: 30vw;
  font-size: 1.7vw;
}

.header-title {
  line-height: 1.3;
  font-size: 2.8vw;
}

.header-body {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  gap: 1vw;
  width: 38vw;
}

.green-marshie {
  position: absolute;
  align-self: flex-start;
  transform: rotate(-17deg);
  width: 30vw;
  margin-top: -5vw;
  margin-left: -30vw;
}

/* mobile view - header size */
@media (max-width: 768px) {
  .header-floatie {
    width: 140vw;
    margin-left: -45vw;
    margin-top: -10vw;
  }

  .header-content {
    gap: 3vw;
    top: 14.5vw;
    right: 23vw;
    font-size: 3vw;
  }

  .header-title {
    font-size: 5vw;
    line-height: 1.2;
  }

  .header-body {
    line-height: 1.3;
    gap: 1.5vw;
  }

  .green-marshie {
    width: 40vw;
    margin-top: -4vw;
    margin-left: -38vw;
  }
}
</style>
