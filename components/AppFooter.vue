<template>
  <footer>
    <span id="copyright">
      Copyright &copy; 2019 - 2022 Bitcamp. All Rights Reserved.
    </span>
    <span id="links">
      <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a> |
      <a href="./sponsor.html">Sponsor Us</a> |
      <a href="./assets/brand.pdf">Brand Guidelines</a> |
      <a href="mailto:hello@bit.camp">Contact Us</a>
    </span>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
};
</script>

<style>
footer {
  color: #b2b2b2;
  background: #f2f2f2;

  padding: 20px 0px 20px 0px;
  height: 120px;

  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
}

footer a {
  color: #595959;
  border-bottom: 0px;

  transition: border-bottom 2s;
}

footer a:hover {
  border-bottom: 1px solid #595959;
  transition: border-bottom 2s;
}

footer a {
  font-weight: normal;
  color: #595959;
  border-bottom: thin solid #f2f2f2;
  /* Bottom border starts as same color as background */

  /* Animated footer link fades */
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  margin: 0rem 0.3rem 0rem 0.3rem;
}

footer a:hover {
  color: #595959;
  border-bottom: thin solid #595959;
  /* Bottom border transitions to same color as text */
}

@media (max-width: 1200px) {
  footer {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
