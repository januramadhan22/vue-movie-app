<template>
  <div class="w-full h-[1000px] flex flex-row">
    <SidebarVue />
    <div class="movie-detail">
      <h2>{{ movie.Title }}</h2>
      <p>{{ movie.Year }}</p>
      <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
      <p>{{ movie.Plot }}</p>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import env from "../utils/env";

import SidebarVue from "../components/Sidebar.vue";

export default {
  components: {
    SidebarVue,
  },
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
      )
        .then((response) => response.json())
        .then((data) => ((movie.value = data), console.log(data)));
    });
    return { movie };
  },
};
</script>
