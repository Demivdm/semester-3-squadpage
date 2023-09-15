<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
  console.log(slice);
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>

{#each slice.items as item}
  <article class="member-card">
          <h2>{item.squadmembers.data.name[0].text}</h2>
          <img src="{item.squadmembers.data.memberimage.url}" alt="{item.squadmembers.data.name[0].text}">
          <img src="{item.squadmembers.data.horoscopeimage.url}" alt="{item.squadmembers.data.horoscope}">
          <p>{item.squadmembers.data.age}</p>
          <p>{item.squadmembers.data.horoscope}</p>
          <p>{item.squadmembers.data.favoritecodelanguage[0].text}</p>
          <a href="{item.squadmembers.data.profielcardlink}">Visitekaartje</a> 
    
  </article> 
{/each}
</section>

  <style>

.member-card{
  border: 1px solid black;
  margin: 1em ;
}
  </style>