<template>
  <div class="list-container">
    <h1>Lista de Itens</h1>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="list-item">
        <span>{{ item.name }} - {{ item.price }}</span>
        <button @click="deleteItem(item.id)" class="btn delete-btn">Deletar</button>
      </li>
    </ul>
    <router-link to="/add-item" class="btn back-btn">Cadastrar Novo Item</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // Lista de itens
    };
  },
  mounted() {
    // Carregar itens do localStorage ao montar o componente
    this.loadItems();
  },
  methods: {
    loadItems() {
      this.items = JSON.parse(localStorage.getItem('items')) || [];
    },
    deleteItem(id) {
      // Remove o item da lista e salva novamente no localStorage
      this.items = this.items.filter((item) => item.id !== id);
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },
};
</script>
