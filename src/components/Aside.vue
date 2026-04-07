<script setup>
import { getCategorias } from "../services/api";
import { ref, onMounted } from "vue";

const categorias = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const data = await getCategorias();
    console.log("Categorias:", data);

    categorias.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});

</script>
<template>
  
  <aside>
    <h2>Categorias</h2>
    <p v-if="loading">Carregando categorias...</p>
    <nav v-else>
      <ul>
        <li>
          <input type="checkbox" id="categoria-todas"/>
          <label for="categoria-todas">Todas</label>
        </li>
        <li v-for="categoria in categorias" :key="categoria">
          <input type="checkbox" :id="`${categoria}`"/>
          <label :for="`${categoria}`">
            {{ categoria }}
          </label>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style scoped>
aside {
  width: 17%;
  float: left;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  color: #000;
}
aside > nav > ul {
  list-style: none;
  padding: 0;
  font-size: 12px;
}

aside > nav > ul > li {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
}
aside > nav > ul > li label::first-letter {
  text-transform: uppercase;
}
</style>
