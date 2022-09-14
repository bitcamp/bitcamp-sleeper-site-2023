<template>
  <a class="button" :href="link">
    <h3 class="button-text">{{ text }}</h3>
  </a>
</template>

<script lang="ts">
export default {
  name: 'LinkButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  border-radius: 1rem;
  background-color: #ffaf3f;
}

.button:hover {
  background-color: rgb(255, 175, 63, 0.5); /* #ffaf3f with 0.5 opacity */
  transition: 0.4s;
}

.button-text {
  /* color: #000; */
  font-size: 1.4vw;
}

/* mobile view */
@media (max-width: 768px) {
  .button {
    padding: 2vw;
  }

  .button-text {
    font-size: 3vw;
  }
}
</style>
