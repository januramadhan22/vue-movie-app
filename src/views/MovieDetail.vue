<template>
  <div class="w-full h-[1000px] flex flex-row">
    <SidebarVue />
    <div class="movie-detail w-full min-h-screen flex flex-col gap-4 mx-9 my-9">
      <h2 class="text-white text-2xl font-bold">{{ movie.Title }}</h2>
      <div class="w-full flex gap-5 text-white">
        <img
          :src="movie.Poster"
          alt="Movie Poster"
          class="featured-img w-[287px] h-[404px] rounded-xl shadow-md shadow-gray-600"
        />
        <div class="flex flex-col gap-5">
          <div>
            <p>Release Date: {{ movie.Year }}</p>
            <p>Language: {{ movie.Language }}</p>
            <p>Genre: {{ movie.Genre }}</p>
            <p>Cast & Crew: {{ movie.Actors }}</p>
            <p>Director: {{ movie.Director }}</p>
            <p>Length: {{ movie.Runtime }}</p>
          </div>
          <p class="text-2xl font-bold">SINOPSIS</p>
          <p>{{ movie.Plot }}</p>
        </div>
      </div>
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
