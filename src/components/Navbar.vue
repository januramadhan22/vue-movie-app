<template>
  <div class="header">
    <router-link to="/">
      <div class="brand">
        <img
          src="../assets/MERDEKA_3D_Text_Effect_Template copy 1.svg"
          alt="Cinemakuy"
          width="130px"
        /></div
    ></router-link>
    <form @submit.prevent="searchMovies()">
      <input
        type="text"
        placeholder="Search Title / Theatre Here"
        v-model="search"
      />
    </form>
    <div class="supported">
      <img src="../assets/IMAX-logo 1.svg" alt="Imax" />
      <img src="../assets/Logo_Dolby_Atmos 1.svg" alt="Dolby" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>
