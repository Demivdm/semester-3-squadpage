<h1>Starlight Diviners</h1>
<script>
    import * as prismic from '@prismicio/client'
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
  
    export let data
    let members = data.list
    console.log(data )
 
 </script>

<section>
  <!-- //for each loop svelte syntax// -->
  {#each members as member }
  <article class="members-card">
   <h2>{@html prismic.asHTML(member.data.name)}</h2> 
   <p>Leeftijd: {(member.data.age)}</p> 
   <p>{(member.data.horoscope)}</p>
   <p>{@html prismic.asHTML(member.data.namefavoriteCodeLanguage)}</p>
</article>
{/each}


</section>

<style>
.members-card{
  border: 1px solid black;
  margin: 1em auto;
}

</style>