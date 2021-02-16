import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home/Home.vue';
import Game from '@/views/Game/Game.vue';
import GameOver from '@/views/GameOver/GameOver.vue';
import Ranking from '@/views/Ranking/Ranking.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/game',
		name: 'Game',
		component: Game
	},
	{
		path: '/gameover',
		name: 'GameOver',
		component: GameOver,
		props: true
	},
	{
		path: '/ranking',
		name: 'Ranking',
		component: Ranking
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;