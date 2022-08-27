<template>
  <div class="grid-container">
    <div class="rotate-div">
      <div class="bob-div">
        <img class="bb-floatie" src="/assets/img/floaties/bb-floatie.svg" />
        <h1 class="bb-floatie-text">Explore Our Past Events</h1>
      </div>
    </div>

    <div class="past-grid">
      <template v-for="year in years" :key="year">
        <EventCard :year="year" :theme="themes[year]" />
      </template>
    </div>
    <div class="rotate-div">
      <div class="bob-div">
        <img class="circle-floatie" src="/assets/img/floaties/circle-floatie.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EventCard from '~/components/EventCard.vue';
export default {
  name: 'PastEventsGrid',
  components: { EventCard },
  data() {
    return {
      years: [2022, 2021, 2019, 2018, 2017, 2016, 2015, 2014],
      themes: {
        2022: 'Adventure Awaits',
        2021: 'Explore Together',
        2019: 'Build With Purpose',
        2018: 'Mark Your Trail',
        2017: 'Build Together',
        2016: 'Explore New Grounds',
        2015: 'Imagine Tomorrow',
        2014: 'A New Hackathon',
      },
    };
  },
};
</script>

<style scoped>
.rotate-div {
  animation: floatie-rotate 7s ease infinite reverse;
}

.bob-div {
  animation: floatie-bob 6s ease infinite reverse;
}

.grid-container {
  position: relative;
}

.past-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.bb-floatie {
  width: 50vw;
  margin-left: -2vw;
  margin-bottom: -15vw;
}

.bb-floatie-text {
  position: absolute;
  transform: rotate(-20.5deg);
  font-size: 2.8vw;

  top: 13vw;
  left: 7.5vw;
}

.circle-floatie {
  width: 75vw;
  margin-left: 60vw;
  margin-top: -75vh;
}

/* mobile view */
@media (max-width: 920px) {
  .circle-floatie {
    position: absolute;
    margin-top: 0;
    left: 0;
    top: 60vh;
  }
}
</style>
