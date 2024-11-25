<template>
  <div class="home-container">
    <h1>Bem-vindo!</h1>
    <div class="links">
      <router-link to="/add-item" class="btn">Cadastrar Item</router-link>
      <router-link to="/item-list" class="btn">Ver Lista de Itens</router-link>
    </div>
  </div>
</template>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.links {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 10px 20px;
  background: #6200ea;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;
}

.btn:hover {
  background: #4500a6;
  transform: scale(1.1);
}
</style>
