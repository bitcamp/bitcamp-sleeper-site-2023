<template>
  <div id="past-grid">
    <div v-for="year in years" :key="year">
      <EventCard :year="year" :theme="themes[year]" />
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

<style>
#past-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 1000px;
  margin: auto;
}
</style>
