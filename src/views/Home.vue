<template>
  <div class="w-full h-auto flex flex-row">
    <SidebarVue />
    <div class="w-8/12 h-full grid grid-cols-3 justify-center gap-5 mx-9 my-9">
      <div
        v-for="movie in movies"
        :key="movie.imdbID"
        class="movie-list w-full h-full my-4"
      >
        <router-link :to="`/movie/` + movie.imdbID">
          <div class="w-full h-full flex flex-col items-center gap-4">
            <img
              :src="movie.Poster"
              alt="Movie Poster"
              class="w-[287px] h-[404px] rounded-xl shadow-md shadow-gray-600"
            />
            <h3 class="text-center text-white">{{ movie.Title }}</h3>
          </div></router-link
        >
      </div>
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
