<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
  // dit is de standaard status van flipped. Het is nu standaard false en met een onclick wordt deze veranderd naar true waarbij de class flipped wordt geactiveerd
  // ik heb een array aangemaakt waar alle kaartjes in gaan
  let flippedStates = new Array(slice.items.length).fill(false);

  // Functie om individuele kaartjes te flippen
  function toggleCard(index) {
    flippedStates[index] = !flippedStates[index];
  }
</script>

<div class="arrow-down">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke="var(--offwhite)"
      d="M5 16c.742 0 1.85.733 2.78 1.475c1.2.954 2.247 2.094 3.046 3.401C11.425 21.856 12 23.044 12 24m0 0c0-.956.575-2.145 1.174-3.124c.8-1.307 1.847-2.447 3.045-3.401C17.15 16.733 18.26 16 19 16m-7 8V0"
    /></svg
  >
</div>

<section
  class="member-cards"
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <!-- <h1>hoi </h1> -->
  {#each slice.items as item, index}
    <!-- <<<<<<< HEAD >>>>>> -->
    <!-- <section>
      <div>{item.rads}</div>
    </section> -->

    <!-- hier geef ik een class met flipped mee en er wordt een status aan de array toegevoegd. Vervolgens wordt onclick de functie togglecard aangeroepen -->
    <main
      class:flipped={flippedStates[index]}
      on:click={() => toggleCard(index)}
    >
      <section class="member-card">
        <div class="inner-card">
          <section class="front-of-card">
            <img
              class="front-of-card"
              src={item.squadmembers.data.horoscopeimage.url}
              alt={item.squadmembers.data.horoscope}
            />
          </section>
          <section class="back-of-card">
            <h2>{item.squadmembers.data.name[0].text}</h2>
            <div class="top-card-img">
              <img
                src={item.squadmembers.data.memberimage.url}
                alt={item.squadmembers.data.name[0].text}
              />
            </div>
            <!-- Flip the individual card -->
            <ul>
              <li>{item.squadmembers.data.age}</li>
              <li>{item.squadmembers.data.horoscope}</li>
              <li>{item.squadmembers.data.favoritecodelanguage[0].text}</li>
            </ul>
            <div class="button_container">
              <a href={item.squadmembers.data.profielcardlink} class="button"
                >Visitekaartje</a
              >
            </div>
          </section>
        </div>
      </section>
    </main>
  {/each}
</section>

<style>
  body {
    overflow-x: hidden;
    box-sizing: border-box;
  }
  :root {
    --gold: #e1c253;
    --darkblue: #061528;
    --offwhite: #fffbea;
    --lightblue: #062968;
    background: url(/static/sterren-achtergrond.jpg);
  }

  h1,
  h2 {
    font-family: "Elsie";
    color: var(--offwhite);
    text-align: center;
    padding-left: 0.5em;
    padding-right: 0.5em;
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .arrow-down {
    text-align: center;
    padding-top: 1.8em;
    stroke-width: 2px;
    color: var(--offwhite);
  }

  /* start kaartjes styling */

  .member-cards {
    display: flex;
    flex-wrap: wrap;
    max-width: 80vw;
    margin: auto;
    margin-top: 10em;
    justify-content: center;
    gap: 8;
    padding: 1em;

    /* display: grid;
    grid-auto-flow: column;

    overflow-y: scroll;
    padding: 20px;
    height: 600px;
    width: 50vw; */
  }

  .member-card {
    background-color: transparent;
    height: 423px;
    width: 234px;
    perspective: 1000px;
    cursor: pointer;
    display: flex;
    margin: 1em;
    align-self: center;
    padding: 1em;
    margin: 1em;
  }

  .inner-card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  /* hieronder gebruik ik een transform om de class flipped te draaien, door .member en .inner ook aan te roepen draaien ze mee met de flipped class */

  .flipped .member-card .inner-card {
    transform: rotateY(180deg);
  }

  .front-of-card,
  .back-of-card {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .top-card-img {
    overflow: hidden;
    width: 100%;
    height: 40%;
  }
  .top-card-img img {
    width: 100%;
    position: relative;
    top: -2em;
  }

  .back-of-card {
    height: 423px;
    width: 234px;
    border: 3px solid var(--gold);
    border-radius: 13px;
    transform: rotateY(180deg);
    background: var(--darkblue);
  }
  ul > li {
    color: white;
    list-style-type: none;
    text-align: left;
    font-family: "Montserrat";
  }
</style>
