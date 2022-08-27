<template>
  <footer>
    <div class="rotate-div">
      <div class="bob-div">
        <img class="footer-floatie" src="/assets/img/floaties/footer-floatie.svg" />
      </div>
    </div>

    <div class="floatie-text">
      <div class="links">
        <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a> |
        <a href="./assets/brand.pdf">Brand Guidelines</a> |
        <a href="mailto:hello@bit.camp">Contact Us</a>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 - 2022 Bitcamp. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.rotate-div {
  animation: footer-rotate 10s ease infinite reverse;
}

.bob-div {
  animation: footer-bob 6s ease infinite reverse;
}

footer {
  position: relative;
  box-sizing: border-box;

  height: 30vw;
  width: 100vw;
  overflow: hidden;
}

.footer-floatie {
  width: 110%;
  margin-left: -10vw;
}

.floatie-text {
  position: absolute;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 5vw;
}

@media (max-width: 768px) {
  .floatie-text {
    font-size: 2.5vw;
  }
}
</style>
