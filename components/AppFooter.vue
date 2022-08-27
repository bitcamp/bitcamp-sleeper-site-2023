<template>
  <footer>
    <kinesis-container :strength="25">
      <kinesis-element :strength="25">
        <img
          class="footer-floatie"
          src="/assets/img/floaties/footer-floatie.svg"
        />
      </kinesis-element>
    </kinesis-container>

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
