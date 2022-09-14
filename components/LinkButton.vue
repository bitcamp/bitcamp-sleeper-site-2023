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
  background-color: #479f79;
  transition: 0.4s;
}

.button:hover {
  background-color: #387f60; /* darken 20% */
  transition: 0.4s;
}

.button-text {
  font-size: 1.7vw;
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
