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
        <h1 class="header-title">shh... we’re on vacation :)</h1>
        <div class="header-body">
          <p>Bitcamp will return in 2023!</p>
          <p>In the meantime, apply to join us as an organizer.</p>
          <div class="button-container">
            <LinkButton
              text="Apply Now!"
              link="https://forms.gle/o8ReRB6vfvJBRtRx7"
            />
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LinkButton from '~/components/LinkButton.vue';
import SocialIcons from '~/components/SocialIcons.vue';
export default {
  name: 'AppHeader',
  components: { LinkButton, SocialIcons },
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
  top: 8vw;
  right: 29vw;
  font-size: 1.7vw;
}

.header-title {
  width: 20vw; /* two lines */
  line-height: 1.3;
  font-size: 2.8vw;
}

.header-body {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  width: 40vw;
}

.button-container {
  margin-top: 0.5vw;
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
    top: 15vw;
    right: 22vw;
    font-size: 3vw;
  }

  .header-title {
    width: auto; /* one line */
    font-size: 5vw;
    line-height: 1;
  }

  .header-body {
    width: 45vw;
    line-height: 1.3;
  }

  .green-marshie {
    width: 40vw;
    margin-top: -4vw;
    margin-left: -28vw;
  }
}
</style>
