<script setup>
import { ref, onMounted } from "vue";
import { getProdutos } from "../services/api";

const produtos = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const data = await getProdutos();
    console.log("Produtos:", data);

    produtos.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <h2>Produtos</h2>

  <p v-if="loading">Carregando...</p>

  <div v-else>
    <div v-for="produto in produtos" :key="produto.id">
      <h3>{{ produto.title }}</h3>
      <img :src="produto.image" width="100" />
      <p>R$ {{ produto.price }}</p>
    </div>
  </div>
</template>
