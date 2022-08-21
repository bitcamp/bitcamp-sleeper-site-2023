<template>
  <div
    class="event"
    v-bind:style="{
      background: `no-repeat center center url('assets/img/thumbnails/${year}-thumb.jpg')`,
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
    year: 0,
    theme: '',
  },
};
</script>

<style scoped>
.event {
  width: 420px;
  height: 280px;
  margin: 20px;

  color: white;
  text-align: left;

  border-radius: 35px;

  background-size: cover !important;
  /* !important so we don't have to repeat*/
  box-shadow: 0px, 0px, 20px, 0px rgba(0, 0, 0, 0.2);
  position: relative;
}

.event a {
  color: white;
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
  background: rgba(0, 0, 0, 0.5);
  transition: 0.4s;
}
</style>
