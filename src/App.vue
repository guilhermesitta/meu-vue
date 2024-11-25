<template>
  <div id="app">
    <AppNavbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

main {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
