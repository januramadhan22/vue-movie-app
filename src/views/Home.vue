<template>
  <div class="w-full h-[1000px] flex flex-row">
    <SidebarVue />
    <div v-for="movie in movies" :key="movie.imdbID" class="movie-list">
      <router-link :to="`/movie/` + movie.imdbID">
        <div class="w-12 h-48">
          <img :src="movie.Poster" alt="Movie Poster" class="block h-32" />
          <h3>{{ movie.Title }}</h3>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import env from "../utils/env";

import SidebarVue from "../components/Sidebar.vue";

export default {
  components: {
    SidebarVue,
  },
  setup() {
    const movies = ref([]);
    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=naruto`)
        .then((response) => response.json())
        .then((data) => ((movies.value = data.Search), console.log(data)));
    });
    return { movies };
  },
};
</script>
