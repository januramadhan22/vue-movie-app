<template>
  <header><NavbarVue /></header>
  <main>
    <router-view></router-view>
  </main>
  <footer><FooterVue /></footer>
</template>

<script>
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>
