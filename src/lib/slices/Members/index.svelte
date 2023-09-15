<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
  console.log(slice);
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  {#each slice.items as item}
    <article class="member-card">
      <h2>{item.squadmembers.data.name[0].text}</h2>
      <img
        src={item.squadmembers.data.memberimage.url}
        alt={item.squadmembers.data.name[0].text}
      />
      <img
        src={item.squadmembers.data.horoscopeimage.url}
        alt={item.squadmembers.data.horoscope}
      />
      <p>{item.squadmembers.data.age}</p>
      <p>{item.squadmembers.data.horoscope}</p>
      <p>{item.squadmembers.data.favoritecodelanguage[0].text}</p>
      <a href={item.squadmembers.data.profielcardlink}>Visitekaartje</a>
    </article>
  {/each}
</section>

<style>
  :root {
    --gold: #e1c253;
    --darkblue: #061528;
    --offwhite: #fffbea;
    --lightblue: #062968;
    background: url(background-stars.jpg);
  }

  h1,
  h2 {
    font-family: "Elsie";
    color: var(--offwhite);
  }

  p {
    font-family: "Montserrat";
    color: var(--offwhite);
  }

  a {
    font-family: "Elsie";
    padding: 0.7em;
    width: 135px;
    height: 35px;
    /* background: rgb(202, 162, 82); */
    background: linear-gradient(
      90deg,
      rgba(225, 194, 83, 1) 0%,
      rgba(255, 231, 183, 1) 50%,
      rgba(225, 194, 83, 1) 100%
    );
    color: var(--darkblue);
    border-style: solid;
    border-width: 1px;
    border-color: var(--darkblue);
  }
</style>
