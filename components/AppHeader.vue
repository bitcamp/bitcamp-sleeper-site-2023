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
            Follow us on our socials to be the first to know when organizer
            applications and general registration opens!
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
  gap: 3vw;

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
  width: 35vw;
  font-size: 1.4vw;
}

p {
  margin: 0;
}

.green-marshie {
  position: absolute;
  text-align: left;
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
    top: 14.5vw;
    right: 23vw;
  }

  .header-title {
    font-size: 5vw;
    line-height: 1;
  }

  .header-body {
    width: 45vw;
    font-size: 3vw;
    line-height: 1.3;
  }

  .green-marshie {
    width: 40vw;
    margin-top: -4vw;
    margin-left: -36vw;
  }
}
</style>
