<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/add-item">Cadastrar</router-link>
    <router-link to="/item-list">Lista de Itens</router-link>
  </nav>
</template>

<style>
.navbar {
  width: 100%;
  padding: 15px 20px;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 15px;
  transition: background 0.3s, transform 0.3s;
}

.navbar a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  transform: scale(1.05);
}
</style>
