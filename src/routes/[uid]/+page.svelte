<script>
  import { SliceZone } from "@prismicio/svelte";
  import { dev } from "$app/environment";
  import * as components from "$lib/slices";
  import { onMount } from "svelte";
  export let data;
  // console.log(data);
  // console.log(data.members)
  // onMount(() => {

  //   var elementsToShow = document.querySelectorAll('[value]');
  // // Loop through the selected elements
  // for (var i = 0; i < elementsToShow.length; i++) {
  //   var element = elementsToShow[i];

  // Check the value of the "data-show" attribute
  //   var showValue = element.getAttribute('value');
  //   console.log(showValue)
  //   // If the value is "true," display the element; otherwise, hide it
  //   if (showValue == 'schorpioen') {

  //     element.style.display = 'block';
  //   }
  // }

  // console.log(horoscope)
  // }

  // });
</script>

<main class="page-contaniar">
  <div class="button_container">
    <a href="/" class="back-button"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
      >
        <path
          d="M7.99995 14.0323C8.00295 13.2903 7.27445 12.1793 6.53622 11.2463C5.58709 10.0425 4.45134 8.99088 3.14759 8.18659C2.17002 7.58362 0.984362 7.00382 0.0283704 6.99994M0.0283704 6.99994C0.984362 7.00382 2.17568 6.43364 3.1571 5.83861C4.46733 5.04391 5.61156 4.00154 6.57041 2.80741C7.31617 1.87942 8.05366 0.772402 8.05666 0.0324082M0.0283704 6.99994L24.0282 7.09716"
          stroke="#061528"
        />
      </svg> Terug</a
    >
  </div>
  <h1>Starlight deviners</h1>
  <section class="desktop-naast-elkaar">
    <section class="card-introduction">
      <img src={data.page.horoscopecard.url} alt={data.page.title[0].text} />
      <div class="horoscope-introduction">
        <h2>{data.page.title[0].text}</h2>
        <p>
          {data.page.explanationtext}
        </p>
      </div>
    </section>
    <article class="students-same-horoscope">
      <h2>Studenten met hetzelde sterrenbeeld</h2>
      <section class="cards-container">
        {#each data.members as member}
          <!-- if (member) -->
          <section class="member-card" value={member.data.horoscope}>
            <section class="back-of-card">
              <h2>{member.data.name[0].text}</h2>
              <div class="top-card-img">
                <img
                  src={member.data.memberimage.url}
                  alt={member.data.name[0].text}
                />
              </div>
              <ul>
                <li>{member.data.age}</li>
                <li>{member.data.horoscope}</li>
                <li>{member.data.favoritecodelanguage[0].text}</li>
              </ul>
              <div class="button_container">
                <a href={member.data.profielcardlink} class="button"
                  >Visitekaartje</a
                >
              </div>
            </section>
          </section>
        {/each}
      </section>
    </article>
  </section>
</main>

<style>
  :root {
    --gold: #e1c253;
    --darkblue: #061528;
    --offwhite: #fffbea;
    --lightblue: #062968;
    background-image: url(/static/background-stars.jpg);
  }

  main {
    padding: 0.7em;
    max-width: 80vw;
    margin: auto;
  }

  h1,
  h2 {
    font-family: "Elsie";
    color: var(--offwhite);
    font-weight: 100;
  }

  p {
    font-family: "montserrat";
    color: var(--offwhite);
  }

  .card-introduction {
    display: flex;
    flex-direction: column;
  }
  .card-introduction img {
    margin-top: 2rem;
  }

  .horoscope-introduction {
    padding: 0.5em;
    /* margin-top: -1.5em; */
  }

  .card-back {
    width: 140px;
  }

  img {
    width: 163px;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
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
    border: 1px solid gold;
    background: var(--darkblue);
  }
  ul > li {
    color: white;
    list-style-type: none;
    text-align: left;
    font-family: "Montserrat";
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
    /* margin: 0 auto; */
  }
  a.back-button {
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

  @media screen and (min-width: 1000px) {
    .card-introduction {
      width: 90%;
    }
    .horoscope-introduction {
      padding-left: 1.5em;
      margin-top: 0em;
    }
    .students-same-horoscope {
      width: 90%;
    }
    .desktop-naast-elkaar {
      display: grid;
      grid-auto-flow: column;
      margin-top: 4rem;
    }
    .card-introduction {
      display: grid;
      grid-auto-flow: column;
    }
  }

  /* .member-card{
    display: none;
  } */
</style>
