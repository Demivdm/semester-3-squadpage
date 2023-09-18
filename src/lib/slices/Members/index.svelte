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

      <div class="button_container">
        <a href={item.squadmembers.data.profielcardlink} class="button"
          >Visitekaartje</a
        >
      </div>
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

  .button_container {
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
    width: 215px;
    height: 55px;
    margin: 0 auto;
  }

  a.button {
    color: var(--darkblue);
    border: 1px solid var(--darkblue);
    width: 196px;
    height: 40px;
    padding: 10px 38px;
    margin: 8px 1px -42px 8.5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 19px;
    font-family: "Elsie";
    display: inline-block;
    text-decoration: none;
    /* -webkit-transition: all 200ms ease 0s;
    -moz-transition: all 200ms ease 0s;
    -ms-transition: all 200ms ease 0s;
    -o-transition: all 200ms ease 0s;
    transition: all 200ms ease 0s;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased; */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* .button {
    font-family: "Elsie";
    padding: 0.7em;
    width: 135px;
    height: 35px;
    /* background: rgb(202, 162, 82); */
  /* background: linear-gradient(
          90deg,
          rgba(225, 194, 83, 1) 0%,
          rgba(255, 231, 183, 1) 50%,
          rgba(225, 194, 83, 1) 100%
        );
        color: var(--darkblue);
        border-style: solid;
        border-width: 1px;
        border-color: var(--darkblue);
      } */
</style>
