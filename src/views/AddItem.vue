<template>
  <div class="form-container">
    <h1>Cadastro de Itens</h1>
    <form @submit.prevent="addItem" class="form">
      <label for="itemName" class="form-label">Nome do Item</label>
      <input
        id="itemName"
        type="text"
        v-model="itemName"
        placeholder="Digite o nome do item"
        required
        class="form-input"
      />

      <label for="itemPrice" class="form-label">Preço do Item (R$)</label>
      <input
        id="itemPrice"
        type="text"
        v-model="itemPrice"
        placeholder="Digite o preço do item"
        @input="formatPrice"
        required
        class="form-input"
      />

      <div class="button-group">
        <button type="submit" class="btn btn-primary">Adicionar</button>
        <router-link to="/item-list" class="btn btn-secondary">Ver Lista</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: '', // Nome do item a ser cadastrado
      itemPrice: '', // Preço do item
    };
  },
  methods: {
    // Adiciona o item com nome e preço
    addItem() {
      if (!this.itemName.trim() || !this.itemPrice.trim()) {
        alert('Preencha todos os campos!');
        return;
      }

      // Carrega itens existentes no localStorage
      const items = JSON.parse(localStorage.getItem('items')) || [];

      // Adiciona um novo item à lista
      items.push({
        id: Date.now(),
        name: this.itemName,
        price: this.itemPrice,
      });

      // Salva novamente no localStorage
      localStorage.setItem('items', JSON.stringify(items));

      // Limpa os campos e notifica sucesso
      this.itemName = '';
      this.itemPrice = '';
      alert('Item cadastrado com sucesso!');
    },

    // Formata o preço para aceitar apenas números e no formato de reais
    formatPrice() {
      const numericValue = this.itemPrice.replace(/\D/g, ''); // Remove caracteres não numéricos
      this.itemPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseFloat(numericValue / 100) || 0); // Formata para reais
    },
  },
};
</script>

<style>
/* Estilização do container principal */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 50px auto;
}

/* Título principal */
h1 {
  font-size: 24px;
  color: #333;
}

/* Estilização do formulário */
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Estilização do rótulo */
.form-label {
  font-size: 16px;
  color: #555;
}

/* Campo de entrada */
.form-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #6200ea;
  outline: none;
}

/* Grupo de botões */
.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

/* Botão primário */
.btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

/* Estilo do botão "Adicionar" */
.btn-primary {
  background: #6200ea;
}

.btn-primary:hover {
  background: #4500a6;
}

/* Estilo do botão "Ver Lista" */
.btn-secondary {
  background: #03a9f4;
  text-decoration: none;
}

.btn-secondary:hover {
  background: #0288d1;
}
</style>
