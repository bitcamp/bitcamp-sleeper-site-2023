<template>
  <div
    class="event"
    :style="{
      backgroundImage: `url('/img/thumbnails/${year}-thumb.jpg')`,
    }"
  >
    <a :href="`https://${year}.bit.camp`">
      <div class="filler">
        <div class="event-text">
          <h3>{{ year }}</h3>
          <div class="event-theme">{{ theme }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EventCard',
  props: {
    year: {
      type: Number,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.event {
  width: min(420px, 70vw);
  aspect-ratio: 3 / 2;
  margin: 20px;

  text-align: left;

  border-radius: 35px;

  background-size: cover !important;
  /* !important so we don't have to repeat*/
  box-shadow: 0px, 0px, 20px, 0px rgba(0, 0, 0, 0.2);
  position: relative;

  z-index: 10;
}

.event-text {
  position: absolute;
  bottom: 0;

  padding: 0px 0px 40px 40px;
}

.event-text h3 {
  font-family: Avenir;
  font-weight: 900;
}

.event-theme {
  font-family: Aleo;
  font-weight: bold;
  font-size: 3rem;
}

.filler {
  width: 100%;
  height: 100%;

  border-radius: 35px;
  transition: 0.4s;
}

.filler:hover {
  background: rgba(203, 242, 255, 0.3); /* #cbf2ff with 0.3 opacity */
  transition: 0.4s;
}

/* mobile view */
@media (max-width: 768px) {
  .event-text {
    padding: 0px 0px 25px 25px;
  }
}
</style>
