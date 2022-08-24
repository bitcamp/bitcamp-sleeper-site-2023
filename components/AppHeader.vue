<template>
  <kinesis-container class="container">
    <div class="header-container">
      <kinesis-element :strength="100">
        <kinesis-element :strength="50" :perspective="1500">
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
export default {
  name: 'AppHeader',
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

.header-title {
  position: absolute;
  color: white;
  text-align: right;
  line-height: 1.3;

  font-size: 2.8vw;
  top: 15vw;
  right: 30vw;
}

.header-body {
  position: absolute;
  color: white;
  text-align: right;
  width: auto;
  font-size: 1.4vw;
  top: 25vw;
  right: 30vw;
}

.green-marshie {
  position: absolute;
  text-align: left;
  transform: rotate(-17deg);
  width: 29vw;
  margin-top: 3vw;
  margin-left: 8vw;
}
</style>
