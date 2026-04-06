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
        <div>
          <Aside />
        </div>
      </div>
    </header>
    <section class="container-cards">
      <h1>Bem-vindo à nossa loja online!</h1>
      <RouterView />
    </section>
  </main>
</template>

<style scoped></style>
