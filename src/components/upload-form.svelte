<form>
    <input type=file on:change={fileChanged} >
</form>

<script>

export let selected = undefined;

const types = ['image/png', 'image/jpeg'];

function fileChanged(event) {
    const file = this.files[0];
    if (file && types.includes(file.type)) {
        selected = file;
    } else {
        selected = undefined;
        console.error('choose image please');
    }
}

</script>