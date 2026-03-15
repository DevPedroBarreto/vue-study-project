<template>
  <div id="app">
    <div class="container-cards">
      <div class="card-prod" v-for="produto in Produtos" :key="produto.id">
        <h2>{{ produto.title }}</h2>
        <p>R$ {{ produto.preco }}</p>
        <label for="Comporar">Adicionar ao carrinho</label>
        <input type="number" name="comprado" v-model="produto.quantidade" />
      </div>
    </div>
    <br />
    <h4>Valor total</h4>
    <p>R$ {{ carrinho.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      Produtos: [
        {
          id: 1,
          title: "Arroz 5kg",
          preco: 22,
          quantidade: 0,
        },

        {
          id: 2,
          title: "Feijão 1kg",
          preco: 6.99,
          quantidade: 0,
        },

        {
          id: 3,
          title: "Macarrão 500g",
          preco: 2.5,
          quantidade: 0,
        },
        {
          id: 4,
          title: "Sal Integral 500g",
          preco: 2,
          quantidade: 0,
        },
      ],
    };
  },
  methods: {},
  computed: {
    carrinho() {
      return this.Produtos.reduce((total, produto) => {
        total = total + produto.preco * produto.quantidade;
        return total;
      }, 0);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #f5f7fb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#app {
  max-width: 900px;
  margin: 80px auto;
  padding: 20px;
  text-align: center;
}

/* GRID DE PRODUTOS */

.container-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

/* CARD */

.card-prod {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-prod:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
}

/* TITULO */

.card-prod h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #1f2937;
}

/* PREÇO */

.card-prod p {
  font-size: 16px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 16px;
}

/* LABEL */

.card-prod label {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 6px;
  display: block;
}

/* INPUT */

.card-prod input {
  width: 80px;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  text-align: center;
  font-size: 14px;
  transition: border 0.2s ease;
}

.card-prod input:focus {
  outline: none;
  border-color: #2563eb;
}

/* TOTAL */

h4 {
  margin-top: 40px;
  font-size: 18px;
  color: #374151;
}

h4 + p {
  font-size: 28px;
  font-weight: bold;
  color: #16a34a;
  margin-top: 8px;
}
</style>
