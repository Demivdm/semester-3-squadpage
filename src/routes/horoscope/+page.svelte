  <script>
    import * as prismic from '@prismicio/client'
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
  
    export let data
    let horoscopeList = data.list
    console.log(data)
 
 </script>
 <section><h1>Starlight Diviners</h1>
   {#each horoscopeList as horoscope }
  <!-- //for each loop svelte syntax// -->

    {@html prismic.asHTML(horoscope.data.titel)}
 
{/each}


</section>
