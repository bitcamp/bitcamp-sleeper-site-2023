<template>
  <footer>
    <div class="rotate-div">
      <div class="bob-div">
        <img class="footer-floatie" src="/assets/img/floaties/top-rug.svg" />
      </div>
    </div>

    <div class="floatie-text">
      <div class="links">
        <span class="links-1">
          <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a> |
          <a href="/prospectus.pdf">Sponsor Us</a></span
        >
        <span class="links-separator"> | </span>
        <span class="links-2">
          <a href="/brand.pdf">Brand Guidelines</a> |
          <a href="mailto:hello@bit.camp">Contact Us</a>
        </span>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 - 2023 Bitcamp. All Rights Reserved.
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
@keyframes footer-rotate {
  0%,
  100% {
    transform: rotate(-1deg);
  }

  50% {
    transform: rotate(1deg);
  }
}

@keyframes footer-bob {
  0%,
  100% {
    transform: translateY(2vw);
  }

  50% {
    transform: translateY(0.5vw);
  }
}

.rotate-div {
  /* animation: footer-rotate 10s ease infinite reverse; */
}

.bob-div {
  /* animation: footer-bob 6s ease infinite reverse; */
}

footer {
  position: relative;
  box-sizing: border-box;

  height: 30vw;
  width: 100vw;
}

.footer-floatie {
  transform: rotate(-17deg);
  top: 2vh;
  width: 120%;
  margin-left: -3vw;
  margin-top: -11vh;
  padding-top: 4vh;
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
    font-size: 3vw;
  }

  .links-1,
  .links-2 {
    display: block;
  }

  .links-separator {
    display: none;
  }
}
</style>
