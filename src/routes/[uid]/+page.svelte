<script>
 import { SliceZone } from '@prismicio/svelte';
import { dev } from "$app/environment"
import * as components from "$lib/slices"
export let data;
console.log(data)
</script>
<h1>{data.uid}</h1>
<!-- voeg hier je code maaike -->
<style>
    h1{
        color: white;
        text-transform: capitalize;
    }
</style>