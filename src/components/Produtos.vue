<script setup>
import { ref, onMounted, computed } from "vue";
import { getProdutos } from "../services/api";
import { selectedCategories } from "../services/store";

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

const produtosFiltrados = computed(() => {
  if (selectedCategories.value.length === 0) {
    return produtos.value;
  }
  return produtos.value.filter((produto) =>
    selectedCategories.value.includes(produto.category)
  );
});
</script>
<template>
  <h2>Produtos</h2>

  <p v-if="loading">Carregando...</p>

  <div v-else>
    <div class="grid-col-4">
      <div class="card_prod" v-for="produto in produtosFiltrados" :key="produto.id">
        <div class="card_prod-img">
          <img
            :src="produto.image"
            width="100"
            :alt="produto.title"
            :title="produto.title"
          />
        </div>
        <div class="card_prod-desc">
          <h3>{{ produto.title }}</h3>
          <p>R$ {{ produto.price }}</p>
          <span>{{ produto.category }}</span>
        </div>
        <div class="card_prod-btn">
          <a class="btn btn-primary" href="#">Add ao Carrinho</a>
          <a class="btn btn-secondary" href="#">Comprar</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card_prod {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  border: solid 1px #ccc;
  border-radius: 15px;
  width: 100%;
  min-width: 300px;
  padding-bottom: 20px;
  color: #010101;
  overflow: hidden;
}
.card_prod-img {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #98f94b;
}
.card_prod-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  width: 100%;
  gap: 5px;
}
.card_prod .card_prod-desc h3 {
  font-size: 12px;
  font-weight: bold;
}
.card_prod-desc p {
  color: #ff0000;
  font-weight: 600;
  font-size: 16px;
}
.card_prod .card_prod-desc span {
  font-size: 10px;
  background-color: #2c2b2b;
  color: #fff;
  padding: 2px 5px;
  border-radius: 4px;
}
.card_prod-btn {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
