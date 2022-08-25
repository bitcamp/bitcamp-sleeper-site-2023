<template>
  <kinesis-container class="container">
    <div class="header-container">
      <kinesis-element :strength="100">
        <kinesis-element :strength="50" :perspective="1500">
          <div class="header-content">
            <img
              class="green-marshie"
              src="../assets/img/floaties/green-marshie.svg"
            />
            <h1 class="header-title">shh... we’re on<br />vacation :)</h1>
            <p class="header-body">
              Bitcamp will return in 2023!<br />
              Follow us on our socials to be the first to know when<br />
              organizer applications and general registration opens!
            </p>
            <SocialIcons />
          </div>
        </kinesis-element>
        <img
          class="header-floatie"
          src="/assets/img/floaties/header-floatie.svg"
        />
      </kinesis-element>
    </div>
  </kinesis-container>
</template>

<script lang="ts">
import SocialIcons from '~/components/SocialIcons.vue';
export default {
  name: 'AppHeader',
  components: { SocialIcons },
};
</script>

<style scoped>
.header-container {
  position: relative;
  transform: rotate(17deg);
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
