<!-- <h1>Starlight Diviners</h1> -->
<script>
    import * as prismic from '@prismicio/client'
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
  
    export let data
 </script>

<SliceZone slices={data.slices} {components} />

  <!-- //for each loop svelte syntax// -->
  <!-- {#each members as member }
  <article class="members-card">
   <h2>{@html prismic.asHTML(member.data.name)}</h2> 
   <p>Leeftijd: {(member.data.age)}</p> 
   <p>{(member.data.horoscope)}</p>
   <p>{@html prismic.asHTML(member.data.namefavoriteCodeLanguage)}</p>
</article>
{/each} -->
  <!-- {#each members as member}
    <article class="members-card">
      <h2>{@html prismic.asHTML(member.data.name)}</h2>
      <p>Leeftijd: {member.data.age}</p>
      <p>{member.data.horoscope}</p>
      <p>{@html prismic.asHTML(member.data.namefavoriteCodeLanguage)}</p>
      <button>Visitekaartje</button>
    </article>
  {/each}


<style>
  .members-card {
    border-style: solid;
    border-width: 1px;
    border-color: var(--gold);
  }
</style> -->
