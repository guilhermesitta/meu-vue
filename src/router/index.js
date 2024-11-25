import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddItem from '../views/AddItem.vue';
import ItemList from '../views/ItemList.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/add-item', name: 'AddItem', component: AddItem },
  { path: '/item-list', name: 'ItemList', component: ItemList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
