<script>
    import WelcomeFirebase from './components/firebase-welcome.svelte';
    import UploadForm from './components/upload-form.svelte';

    export let name;
    export let app;

    let file;
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
    <UploadForm bind:selected={file} />
    {#if file}{file.name}{/if}
    <WelcomeFirebase/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>