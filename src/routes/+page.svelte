<script>
  import * as prismic from "@prismicio/client";
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";

  export let data;
  let members = data.list;
  console.log(data);
</script>

<h1>Starlight Diviners</h1>

<section>
  <!-- //for each loop svelte syntax// -->
  {#each members as member}
    <article class="members-card">
      <h2>{@html prismic.asHTML(member.data.name)}</h2>
      <p>Leeftijd: {member.data.age}</p>
      <p>{member.data.horoscope}</p>
      <p>{@html prismic.asHTML(member.data.namefavoriteCodeLanguage)}</p>
      <button>Visitekaartje</button>
    </article>
  {/each}
</section>

<style>
  .members-card {
      border-style: solid;
      border-width: 1px;
      border-color: var(--gold);
  }

</style>
