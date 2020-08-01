import App from './App.svelte';

const app = new App({
	target: document.querySelector('#app'),
	props: {
		name: 'Basuke'
	}
});

export default app;