<script setup>
import { RouterLink, RouterView } from "vue-router";
import Aside from "./components/Aside.vue";
</script>

<template>
  <main>
    <header>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <Aside />
    <section>
      <RouterView />
    </section>
  </main>
</template>

<style scoped></style>
